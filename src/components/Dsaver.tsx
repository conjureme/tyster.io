'use client';

import { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import toast from 'react-hot-toast';

interface GuildData {
  name?: string;
  emojis?: Array<{
    id: string;
    name: string;
    animated?: boolean;
  }>;
  stickers?: Array<{
    id: string;
    name: string;
    format_type: number;
  }>;
  // there are other properties, but aren't used in this component.
}

export default function Dsaver() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [guildData, setGuildData] = useState<GuildData | null>(null);
  const [jsonError, setJsonError] = useState('');
  const [status, setStatus] = useState('');
  const [downloadStats, setDownloadStats] = useState({
    emojis: 0,
    stickers: 0,
  });

  const [codeContent] = useState(`(async function fetchGuildData() {
      try {
        // Extract guild ID from URL
        const url = window.location.href;
        const guildIdMatch = url.match(/\\/channels\\/(\\d+)/);
        
        if (!guildIdMatch) {
          console.error("Error: Could not detect guild ID from URL. Make sure you're on a Discord server page.");
          return;
        }
        
        const guildId = guildIdMatch[1];
        console.log(\`Detected Guild ID: \${guildId}\`);
        
        // get authorization token from webpackChunks
        let token = '';
        
        try {
          token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();
        } catch (e) {
          console.log("Something went wrong while fetching your token.");
        }
        
        if (!token) {
          console.error("Error: Could not find Discord authentication token. You might need to refresh the page and try again.");
          return;
        }
        
        // fetch guild data using from discord API
        console.log("Attempting to fetch guild data with token...");
        
        const response = await fetch(\`/api/v9/guilds/\${guildId}\`, {
          method: "GET",
          headers: {
            "Authorization": token,
            "Content-Type": "application/json"
          }
        });
        
        if (!response.ok) {
          console.error(\`API request failed with status \${response.status}\`);
          
          if (response.status === 401) {
            console.error("Authentication failed. The token might have expired or is invalid.");
            return;
          } else if (response.status === 403) {
            console.error("You don't have permission to access this guild's data.");
            return;
          } else if (response.status === 404) {
            console.error("Guild not found. The ID might be incorrect or you don't have access to it.");
            return;
          } else {
            throw new Error(\`API request failed with status \${response.status}\`);
          }
        }
        
        const guildData = await response.json();
        
        console.log("%c Guild Data Retrieved Successfully", "color: green; font-weight: bold; font-size: 16px");
        console.log("%c Right click and copy object below.", "color: green; font-weight: bold; font-size: 12px");
        console.log(guildData);
        
        
        return guildData;
      } catch (error) {
        console.error("Error fetching guild data:", error);
      }
    })()`);

  const handleJsonInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const jsonData = JSON.parse(e.target.value);
      setGuildData(jsonData);
      setJsonError('');

      // emojis and stickers
      const emojiCount = jsonData.emojis?.length || 0;
      const stickerCount = jsonData.stickers?.length || 0;

      setDownloadStats({
        emojis: emojiCount,
        stickers: stickerCount,
      });

      setStatus(
        `Found ${emojiCount} emojis and ${stickerCount} stickers ready for download.`
      );
    } catch (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      error
    ) {
      setGuildData(null);
      setJsonError('Invalid JSON. Please check your input.');
      setDownloadStats({ emojis: 0, stickers: 0 });
      setStatus('');
    }
  };

  const downloadFile = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch ${url}`);
      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error(`Error downloading ${url}:`, error);
      return null;
    }
  };

  const downloadAll = async () => {
    if (!guildData) return;

    setIsLoading(true);
    setProgress(0);
    setStatus('Creating ZIP file...');

    const zip = new JSZip();
    const emojisFolder = zip.folder('Emojis');
    const stickersFolder = zip.folder('Stickers');

    const emojis = guildData.emojis || [];
    const stickers = guildData.stickers || [];
    const total = emojis.length + stickers.length;
    let completed = 0;

    try {
      for (const emoji of emojis) {
        setStatus(`Downloading emoji: ${emoji.name}`);

        const isAnimated = emoji.animated || false;
        const fileExtension = isAnimated ? '.gif' : '.png';
        const url = `https://cdn.discordapp.com/emojis/${emoji.id}?size=128`;

        const file = await downloadFile(url);
        if (file) {
          emojisFolder!.file(`${emoji.name}${fileExtension}`, file);
        }

        completed++;
        setProgress(Math.floor((completed / total) * 100));
      }

      for (const sticker of stickers) {
        setStatus(`Downloading sticker: ${sticker.name}`);

        // format_type 1 = static (PNG), format_type 4 = animated (GIF)
        const fileExtension = sticker.format_type === 4 ? '.gif' : '.png';
        const url = `https://media.discordapp.net/stickers/${sticker.id}?size=1024`;

        const file = await downloadFile(url);
        if (file) {
          stickersFolder!.file(`${sticker.name}${fileExtension}`, file);
        }

        completed++;
        setProgress(Math.floor((completed / total) * 100));
      }

      setStatus('Generating ZIP file...');

      // generate and download the zip
      const content = await zip.generateAsync({ type: 'blob' });
      const guildName = guildData.name
        ? `-${guildData.name.replace(/[^\w-]/g, '')}`
        : '';
      saveAs(content, `discord-assets${guildName}.zip`);

      setStatus('Download complete!');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error during download:', error);
        setStatus(`Error: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container mx-auto px-4 py-8 max-w-2xl mt-16 md:mt-0'>
      <h1 className='text-3xl font-bold mb-6 text-center'>
        Discord Emoji & Sticker Downloader
      </h1>

      <div className='card bg-base-100 mb-6 drop-shadow-lg shadow-[3px_3px_0_0_#6366f1]'>
        <div className='card-body text-lg'>
          <h2 className='card-title'>Instructions</h2>
          <ol className='list-disc list-inside space-y-2 ml-2'>
            <li>Get your guild JSON data from the Discord API endpoint:</li>
            <li className='ml-6 font-mono text-sm bg-base-200 p-2 rounded'>
              /api/v9/guilds/{`{guild_id}`}
            </li>
            <li className='ml-6 font-mono text-sm bg-base-200 p-2 rounded'>
              Alternatively, click the button to copy a function, open the
              console on discord, navigate to the server you want (any channel),
              and paste the function in the console and run it to get the JSON
              data.
              <div className='flex space-x-4 mt-2'>
                <button
                  className='btn bg-base-300'
                  onClick={() => {
                    navigator.clipboard.writeText(codeContent);
                    toast.success('Successfully copied function to clipboard!');
                  }}
                >
                  Copy Function
                </button>
                <button
                  className='text-info hover:cursor-pointer'
                  onClick={() => {
                    const modal = document.getElementById(
                      'dsaver_function_modal'
                    ) as HTMLDialogElement;
                    modal?.showModal();
                  }}
                >
                  What is this?
                </button>
              </div>
            </li>
            <li>Paste the JSON data in the textarea below</li>
            <li>
              Click &quot;Download All&quot; to get a ZIP with all emojis and
              stickers
            </li>
          </ol>
        </div>
      </div>

      <div className='flex flex-col mb-6'>
        <label className='label'>
          <span className='text-sm'>Paste Guild JSON Data</span>
        </label>
        <textarea
          className={`textarea h-48 font-mono w-full ${
            jsonError ? 'textarea-error' : ''
          }`}
          placeholder='Paste the JSON response from Discord API here...'
          onChange={handleJsonInput}
          disabled={isLoading}
        ></textarea>
        {jsonError && (
          <span className='text-error text-sm mt-1'>{jsonError}</span>
        )}
      </div>

      {guildData && (
        <div className='mb-6'>
          <div className='stats shadow w-full'>
            <div className='stat'>
              <div className='stat-title'>Server</div>
              <div className='stat-value text-xl'>
                {guildData.name || 'Unknown'}
              </div>
            </div>
            <div className='stat'>
              <div className='stat-title'>Emojis</div>
              <div className='stat-value text-xl'>{downloadStats.emojis}</div>
            </div>
            <div className='stat'>
              <div className='stat-title'>Stickers</div>
              <div className='stat-value text-xl'>{downloadStats.stickers}</div>
            </div>
          </div>
        </div>
      )}

      <div className='flex flex-col gap-4'>
        <button
          className='btn bg-indigo-500 text-neutral-300 hover:bg-indigo-300'
          onClick={downloadAll}
          disabled={
            isLoading ||
            !guildData ||
            downloadStats.emojis + downloadStats.stickers === 0
          }
        >
          {isLoading ? (
            <>
              <span className='loading loading-spinner'></span>
              Downloading...
            </>
          ) : (
            'Download All'
          )}
        </button>

        {isLoading && (
          <div className='w-full'>
            <progress
              className='progress progress-primary w-full'
              value={progress}
              max='100'
            ></progress>
            <p className='text-center mt-2'>{status}</p>
          </div>
        )}

        {!isLoading && status && (
          <div className='alert alert-info'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='stroke-current shrink-0 w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
            <span>{status}</span>
          </div>
        )}
      </div>

      <dialog
        id='dsaver_function_modal'
        className='modal modal-bottom sm:modal-middle'
      >
        <div className='modal-box' style={{ maxWidth: '56rem' }}>
          <div className='flex items-center justify-between'>
            <h3 className='font-bold text-lg'>
              what the flipping heck is this?
            </h3>
            <div className='modal-action mt-0'>
              <form method='dialog'>
                <button className='btn'>close</button>
              </form>
            </div>
          </div>

          <p className='py-4'>
            the below script fetches guild data when pasted into the
            browser&apos;s console while on discord.
          </p>
          <p className='py-4'>
            it looks at the current URL to find the guild ID, then uses your
            personal discord auth token to make a request to the discord API to
            get the guild data.
          </p>
          <p className='py-4'>
            PLEASE NOTE: this function does utilize webpack chunks to get your
            auth token- you should only run this on your own browser or client.
            understand that exposing your auth token can lead to account
            compromise, so use this function at your own risk. i am not
            responsible for any issues that may arise from using it.
          </p>
          <div className='mockup-code bg-base-200 text-base-content w-full max-h-96 overflow-y-auto'>
            <pre className='language-javascript'>
              <code>{codeContent}</code>
            </pre>
          </div>
          <div className='pt-3 flex justify-end'>
            <button
              className='btn bg-base-300'
              onClick={() => {
                navigator.clipboard.writeText(codeContent);
                toast.success('Successfully copied function to clipboard!');
              }}
            >
              Copy Function
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

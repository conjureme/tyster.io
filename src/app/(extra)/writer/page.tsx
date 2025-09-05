'use client';

import { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { saveAs } from 'file-saver';

interface LorebookEntry {
  uid: number;
  key: string[];
  keysecondary: string[];
  comment: string;
  content: string;
  constant: boolean;
  selective: boolean;
  order: number;
  position: number;
  disable: boolean;
  displayIndex: number;
  addMemo: boolean;
  group: string;
  groupOverride: boolean;
  groupWeight: number;
  sticky: number;
  cooldown: number;
  delay: number;
  probability: number;
  depth: number;
  useProbability: boolean;
  role: null;
  vectorized: boolean;
  excludeRecursion: boolean;
  preventRecursion: boolean;
  delayUntilRecursion: boolean;
  scanDepth: null;
  caseSensitive: null;
  matchWholeWords: null;
  useGroupScoring: null;
  automationId: string;
}

interface Lorebook {
  entries: { [key: string]: LorebookEntry };
}

export default function LorebookEditor() {
  const [entries, setEntries] = useState<LorebookEntry[]>([
    {
      uid: 0,
      key: [],
      keysecondary: [],
      comment: '',
      content: '',
      constant: false,
      selective: true,
      order: 100,
      position: 0,
      disable: false,
      displayIndex: 0,
      addMemo: true,
      group: '',
      groupOverride: false,
      groupWeight: 100,
      sticky: 0,
      cooldown: 0,
      delay: 0,
      probability: 0,
      depth: 4,
      useProbability: true,
      role: null,
      vectorized: false,
      excludeRecursion: false,
      preventRecursion: false,
      delayUntilRecursion: false,
      scanDepth: null,
      caseSensitive: null,
      matchWholeWords: null,
      useGroupScoring: null,
      automationId: '',
    },
  ]);

  const [currentKeyInput, setCurrentKeyInput] = useState<{
    [key: number]: string;
  }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [textareaRows, setTextareaRows] = useState<{ [key: number]: number }>(
    {}
  );

  const addEntry = () => {
    const newEntry: LorebookEntry = {
      uid: entries.length,
      key: [],
      keysecondary: [],
      comment: '',
      content: '',
      constant: false,
      selective: true,
      order: 100,
      position: 0,
      disable: false,
      displayIndex: entries.length,
      addMemo: true,
      group: '',
      groupOverride: false,
      groupWeight: 100,
      sticky: 0,
      cooldown: 0,
      delay: 0,
      probability: 0,
      depth: 4,
      useProbability: true,
      role: null,
      vectorized: false,
      excludeRecursion: false,
      preventRecursion: false,
      delayUntilRecursion: false,
      scanDepth: null,
      caseSensitive: null,
      matchWholeWords: null,
      useGroupScoring: null,
      automationId: '',
    };
    setEntries([...entries, newEntry]);
    toast.success('new entry added');
  };

  const updateEntry = (
    index: number,
    field: keyof LorebookEntry,
    value: any
  ) => {
    const newEntries = [...entries];
    newEntries[index] = { ...newEntries[index], [field]: value };
    setEntries(newEntries);
  };

  const deleteEntry = (index: number) => {
    if (entries.length === 1) {
      toast.error('you need at least one entry');
      return;
    }

    const newEntries = entries.filter((_, i) => i !== index);
    newEntries.forEach((entry, i) => {
      entry.uid = i;
      entry.displayIndex = i;
    });
    setEntries(newEntries);
    toast.success('entry deleted');
  };

  const addKeyToEntry = (index: number) => {
    const keyToAdd = currentKeyInput[index]?.trim();
    if (!keyToAdd) return;

    const newEntries = [...entries];
    if (!newEntries[index].key.includes(keyToAdd)) {
      newEntries[index].key.push(keyToAdd);
      setEntries(newEntries);
      setCurrentKeyInput({ ...currentKeyInput, [index]: '' });
    }
  };

  const removeKeyFromEntry = (entryIndex: number, keyIndex: number) => {
    const newEntries = [...entries];
    newEntries[entryIndex].key.splice(keyIndex, 1);
    setEntries(newEntries);
  };

  const generateLorebook = (): Lorebook => {
    const lorebookEntries: { [key: string]: LorebookEntry } = {};
    entries.forEach((entry, index) => {
      lorebookEntries[index.toString()] = entry;
    });
    return { entries: lorebookEntries };
  };

  const exportLorebook = () => {
    const lorebook = generateLorebook();
    const blob = new Blob([JSON.stringify(lorebook, null, 2)], {
      type: 'application/json',
    });
    saveAs(blob, 'lorebook.json');
    toast.success('lorebook exported!');
  };

  const importLorebook = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const lorebook = JSON.parse(content) as Lorebook;

        if (!lorebook.entries) {
          throw new Error('invalid lorebook format');
        }

        const importedEntries: LorebookEntry[] = [];
        Object.keys(lorebook.entries).forEach((key, index) => {
          const entry = lorebook.entries[key];
          importedEntries.push({
            ...entry,
            uid: index,
            displayIndex: index,
          });
        });

        setEntries(importedEntries);
        toast.success('lorebook imported successfully!');
      } catch (error) {
        toast.error('failed to import lorebook. please check the file format.');
      }
    };
    reader.readAsText(file);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className='min-h-screen bg-base-100 py-8 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* header - import/export */}
        {/* header - import/export */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pt-18 md:pt-28'>
          <div className='flex gap-2'>
            <button
              onClick={() => fileInputRef.current?.click()}
              className='btn btn-sm btn-ghost flex items-center gap-2'
            >
              <span className='text-base-content'>import</span>
            </button>
            <button
              onClick={exportLorebook}
              className='btn btn-sm btn-primary flex items-center gap-2'
              disabled={entries.every(
                (e) => !e.comment && !e.content && e.key.length === 0
              )}
            >
              export
            </button>
            <input
              ref={fileInputRef}
              type='file'
              accept='.json'
              onChange={importLorebook}
              className='hidden'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* left side - editor */}
          <div className='space-y-4'>
            <div className='max-h-[75vh] overflow-y-auto space-y-4 pr-2'>
              {entries.map((entry, index) => (
                <div
                  key={index}
                  className='card bg-base-200 border border-base-300'
                >
                  <div className='card-body p-4'>
                    <div className='flex justify-between items-start mb-4'>
                      <h3 className='text-lg font-semibold text-base-content'>
                        entry {index + 1}
                      </h3>
                      <button
                        onClick={() => deleteEntry(index)}
                        className='btn btn-ghost btn-xs text-error'
                        aria-label='delete entry'
                      >
                        <span className='text-sm'>delete entry</span>
                      </button>
                    </div>

                    <div className='form-control mb-3'>
                      <label className='label py-1'>
                        <span className='label-text text-xs'>
                          entry title (comment)
                        </span>
                      </label>
                      <input
                        type='text'
                        placeholder='entry title or name'
                        className='input input-sm input-bordered w-full'
                        value={entry.comment}
                        onChange={(e) =>
                          updateEntry(index, 'comment', e.target.value)
                        }
                      />
                    </div>

                    <div className='form-control mb-3'>
                      <label className='label py-1'>
                        <span className='label-text text-xs'>keys</span>
                      </label>
                      <div className='flex gap-2 mb-2 flex-wrap'>
                        {entry.key.map((key, keyIndex) => (
                          <div
                            key={keyIndex}
                            className='badge badge-primary gap-1 py-3'
                          >
                            {key}
                            <button
                              onClick={() =>
                                removeKeyFromEntry(index, keyIndex)
                              }
                              className='ml-1'
                            ></button>
                          </div>
                        ))}
                      </div>
                      <div className='flex gap-2'>
                        <input
                          type='text'
                          placeholder='add a key or tag'
                          className='input input-sm input-bordered flex-1'
                          value={currentKeyInput[index] || ''}
                          onChange={(e) =>
                            setCurrentKeyInput({
                              ...currentKeyInput,
                              [index]: e.target.value,
                            })
                          }
                          onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                              addKeyToEntry(index);
                            }
                          }}
                        />
                        <button
                          onClick={() => addKeyToEntry(index)}
                          className='btn btn-sm btn-primary'
                        >
                          add
                        </button>
                      </div>
                    </div>

                    <div className='form-control'>
                      <label className='label py-1'>
                        <span className='label-text text-xs'>content</span>
                      </label>
                      <textarea
                        placeholder='describe this entry in detail...'
                        className='textarea textarea-bordered w-full resize-y min-h-[100px] max-h-[500px]'
                        rows={4}
                        value={entry.content}
                        onChange={(e) =>
                          updateEntry(index, 'content', e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={addEntry}
              className='btn btn-outline btn-primary w-full flex items-center gap-2'
            >
              add new entry
            </button>
          </div>

          {/* right side - JSON preview */}
          <div className='hidden lg:block'>
            <div className='card sticky top-8'>
              <div className='card-body p-0'>
                <h3 className='text-lg font-semibold text-base-content mb-3'>
                  JSON preview
                </h3>
                <div className='mockup-code max-h-[75vh] overflow-auto'>
                  <pre className='text-xs'>
                    <code>{JSON.stringify(generateLorebook(), null, 2)}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

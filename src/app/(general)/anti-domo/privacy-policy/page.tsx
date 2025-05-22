import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'anti-domo privacy policy - tyster.io',
  description: 'privacy policy for the anti-domo discord bot',
  keywords: ['anti-domo', 'privacy policy', 'discord bot', 'data protection'],
};

export default function PrivacyPolicy() {
  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-4 py-8 max-w-4xl md:pt-32 mt-16 md:mt-0'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold mb-4'>privacy policy</h1>
          <Link
            href='/anti-domo'
            className='text-indigo-600 hover:text-indigo-800 mb-4 inline-block'
          >
            ← back to anti-domo
          </Link>
          <p className='text-gray-600'>for the anti-domo Discord bot</p>
          <p className='text-sm text-gray-500 mt-2'>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className='prose max-w-none'>
          <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8'>
            <h2 className='text-xl font-semibold text-blue-800 mb-2'>TL;DR</h2>
            <p className='text-blue-700'>
              none of your data is stored. the bot only processes messages in
              real-time to detect domoAI usage, then immediately bans the user.
              no data is saved, logged, or shared with third parties.
            </p>
          </div>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              1. information collected
            </h2>

            <h3 className='text-xl font-medium mb-3'>
              data processed (but not stored):
            </h3>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                <strong>message content:</strong> temporarily processes message
                content to detect domoAI outputs
              </li>
              <li>
                <strong>user IDs:</strong> identifies users who trigger domoAI
                to perform bans
              </li>
              <li>
                <strong>guild IDs:</strong> identifies which discord server the
                bot is operating in
              </li>
              <li>
                <strong>message metadata:</strong> information like embeds,
                mentions, and timestamps
              </li>
            </ul>

            <h3 className='text-xl font-medium mb-3 mt-6'>
              data never collected:
            </h3>
            <ul className='list-disc pl-6 space-y-2'>
              <li>personal information (names, emails, addresses, etc.)</li>
              <li>message history or logs</li>
              <li>user behavior patterns</li>
              <li>any data outside of domoAI detection</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              2. how we use information
            </h2>
            <p className='mb-4'>the bot processes information solely for:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                detecting messages from domoAI (user ID: 1153984868804468756)
              </li>
              <li>identifying users who triggered the domoAI command</li>
              <li>automatically banning those users from the server</li>
              <li>deleting domoAI-generated content</li>
            </ul>
            <p className='mt-4 text-gray-600'>
              <strong>
                all processing happens in real-time and nothing is stored
                permanently.
              </strong>
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              3. data storage and retention
            </h2>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                <strong>no permanent storage:</strong> no stroage of any user
                data, messages, or logs
              </li>
              <li>
                <strong>temporary processing:</strong> data is only held in
                memory during message processing
              </li>
              <li>
                <strong>automatic deletion:</strong> all processed data is
                immediately discarded after action is taken
              </li>
              <li>
                <strong>error logs:</strong> errors are temporarily logged for
                debugging, but these contain no personal data
              </li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>4. data sharing</h2>
            <p className='mb-4'>
              no data is shared, sold, or distributed because:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>there&apos;s no user data stored to begin with</li>
              <li>the bot operates entirely within discord&apos;s ecosystem</li>
              <li>no third-party services are integrated</li>
              <li>no analytics or tracking tools are used</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              5. discord&apos;s role
            </h2>
            <p className='mb-4'>important to note:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                this bot operates within discord&apos;s platform and is subject
                to discord&apos;s privacy policy
              </li>
              <li>
                discord may have access to messages and user data as per their
                own policies
              </li>
              <li>
                server administrators have control over bot permissions and can
                remove the bot at any time
              </li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>6. user rights</h2>
            <p className='mb-4'>
              since no personal data is stored, traditional data rights
              don&apos;t apply, but you can:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                <strong>remove the bot:</strong> server admins can kick/ban the
                bot at any time
              </li>
              <li>
                <strong>disable bot permissions:</strong> admins can revoke bot
                permissions
              </li>
              <li>
                <strong>contact us:</strong> reach out with any concerns about
                the bot&apos;s operation
              </li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>7. security</h2>
            <p className='mb-4'>we protect the limited data we process by:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>using secure discord API connections</li>
              <li>not storing sensitive information</li>
              <li>keeping bot tokens and credentials secure</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>8. age restrictions</h2>
            <p>
              this bot is intended for discord servers and follows
              discord&apos;s age requirements. users must be at least 13 years
              old (or older depending on their country) to use discord and
              interact with this bot.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              9. changes to this policy
            </h2>
            <p className='mb-4'>
              if we make changes to this privacy policy, expect:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                updates to the &apos;last updated&apos; date at the top of this
                page
              </li>
              <li>
                announce any significant changes in the bot&apos;s discord
                server or github repository
              </li>
              <li>
                continue to operate with the same minimal data collection
                principles
              </li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>10. contact</h2>
            <p className='mb-4'>
              questions about this privacy policy? you can reach out:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                <strong>github:</strong>{' '}
                <a
                  href='https://github.com/conjureme/anti-domo'
                  className='text-indigo-600 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  create an issue
                </a>
              </li>
              <li>
                <strong>discord:</strong>{' '}
                <a
                  href='https://discord.gg/rn9j69ApJQ'
                  className='text-indigo-600 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  join my server
                </a>
              </li>
              <li>
                <strong>username:</strong> <span>caniacsauce</span>
              </li>
              <li>
                <strong>twitter:</strong>{' '}
                <a
                  href='https://x.com/caniacsauce'
                  className='text-indigo-600 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  @caniacsauce
                </a>
              </li>
            </ul>
          </section>

          <div className='bg-gray-50 rounded-lg p-6 mt-8'>
            <p className='text-sm text-gray-600'>
              <strong>note:</strong> this privacy policy was hopefully written
              to be easily understood. if you have questions about anything in
              it, please reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

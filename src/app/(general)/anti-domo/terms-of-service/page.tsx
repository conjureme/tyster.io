import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'anti-domo terms of service - tyster.io',
  description: 'terms of service for the anti-domo discord bot',
  keywords: ['anti-domo', 'terms of service', 'discord bot', 'legal'],
};

export default function TermsOfService() {
  return (
    <div className='min-h-screen bg-white'>
      <div className='container mx-auto px-4 py-8 max-w-4xl md:pt-32 mt-16 md:mt-0'>
        <div className='text-center mb-8'>
          <Link
            href='/anti-domo'
            className='text-indigo-600 hover:text-indigo-800 mb-4 inline-block'
          >
            ← back to anti-domo
          </Link>
          <h1 className='text-4xl font-bold mb-4'>terms of service</h1>
          <p className='text-gray-600'>for the anti-domo discord bot</p>
          <p className='text-sm text-gray-500 mt-2'>
            last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className='prose max-w-none'>
          <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8'>
            <h2 className='text-xl font-semibold text-yellow-800 mb-2'>
              important notice
            </h2>
            <p className='text-yellow-700'>
              by adding this bot to your discord server, you agree to these
              terms. the bot automatically bans users who use domoAI- make sure
              your server members are aware of this policy.
            </p>
          </div>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              1. acceptance of terms
            </h2>
            <p className='mb-4'>
              by inviting, using, or interacting with the anti-domo discord bot
              (&apos;the bot&apos;), you agree to be bound by these terms of
              service. if you do not agree to these terms, do not use the bot.
            </p>
            <p>
              these terms apply to server administrators who invite the bot and
              all users who interact with it in servers where it&apos;s present.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              2. bot functionality
            </h2>

            <h3 className='text-xl font-medium mb-3'>what the bot does:</h3>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                monitors messages from domoAI (discord UID: 1153984868804468756)
              </li>
              <li>automatically deletes domoAI-generated content</li>
              <li>identifies users who triggered domoAI commands</li>
              <li>automatically bans those users from the server</li>
              <li>provides basic slash commands for bot status</li>
            </ul>

            <h3 className='text-xl font-medium mb-3 mt-6'>
              what the bot doesn&apos;t do:
            </h3>
            <ul className='list-disc pl-6 space-y-2'>
              <li>store user data or message logs</li>
              <li>moderate other types of content</li>
              <li>provide warnings before banning</li>
              <li>allow appeals or unban requests</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              3. server requirements
            </h2>
            <p className='mb-4'>
              for the bot to function properly, your discord server must:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                have &apos;use external apps&apos; permission enabled for
                members
              </li>
              <li>
                grant the bot appropriate permissions (read messages, manage
                messages, ban members)
              </li>
              <li>
                give the bot a role that&apos;s positioned above regular member
                roles
              </li>
              <li>
                allow the bot to access channels where moderation is needed
              </li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              4. user responsibilities
            </h2>

            <h3 className='text-xl font-medium mb-3'>server administrators:</h3>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                must inform server members about the bot&apos;s automatic
                banning policy
              </li>
              <li>
                are responsible for managing bot permissions appropriately
              </li>
              <li>
                should understand that the bot acts automatically without human
                intervention
              </li>
              <li>
                can remove the bot at any time if they disagree with its actions
              </li>
            </ul>

            <h3 className='text-xl font-medium mb-3 mt-6'>all users:</h3>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                must not attempt to bypass or exploit the bot&apos;s
                functionality
              </li>
              <li>
                understand that using domoAI in servers with this bot will
                result in an automatic ban
              </li>
              <li>
                should report any bot malfunctions to the appropriate channels
              </li>
              <li>
                must comply with discord&apos;s terms of service and community
                guidelines
              </li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              5. disclaimers and limitations
            </h2>

            <div className='bg-red-50 border border-red-200 rounded-lg p-4 mb-4'>
              <h3 className='text-lg font-semibold text-red-800 mb-2'>
                no warranty
              </h3>
              <p className='text-red-700 text-sm'>
                this bot is provided &apos;as-is&apos; without any warranties. i
                make no guarantees about its reliability, accuracy, or
                availability.
              </p>
            </div>

            <ul className='list-disc pl-6 space-y-2'>
              <li>
                <strong>false positives:</strong> the bot may rarely make
                mistakes in detection
              </li>
              <li>
                <strong>false negatives:</strong> the bot may not catch every
                instance of domoAI usage
              </li>
              <li>
                <strong>downtime:</strong> the bot may experience periods of
                unavailability
              </li>
              <li>
                <strong>updates:</strong> bot functionality may change without
                prior notice
              </li>
              <li>
                <strong>third-party dependencies:</strong> the bot relies on
                discord&apos;s API and external services
              </li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              6. limitation of liability
            </h2>
            <p className='mb-4'>
              to the maximum extent permitted by law, i&apos;m not liable for:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>incorrect bans or failed detections</li>
              <li>server disruption caused by bot actions</li>
              <li>loss of users due to bot enforcement</li>
              <li>any indirect, incidental, or consequential damages</li>
              <li>issues arising from discord platform changes</li>
            </ul>
            <p className='mt-4 font-medium'>
              your use of this bot is at your own risk.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>7. privacy and data</h2>
            <p className='mb-4'>
              the bot processes minimal data and stores nothing permanently. for
              detailed information, please review the{' '}
              <Link
                href='/anti-domo/privacy-policy'
                className='text-indigo-600 hover:underline'
              >
                privacy policy
              </Link>
              .
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>no personal data is collected or stored</li>
              <li>message processing happens in real-time only</li>
              <li>no user behavior tracking or analytics</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>8. termination</h2>

            <h3 className='text-xl font-medium mb-3'>
              you can terminate use by:
            </h3>
            <ul className='list-disc pl-6 space-y-2'>
              <li>removing the bot from your server</li>
              <li>revoking bot permissions</li>
              <li>blocking the bot user</li>
            </ul>

            <h3 className='text-xl font-medium mb-3 mt-6'>
              we may terminate service by:
            </h3>
            <ul className='list-disc pl-6 space-y-2'>
              <li>discontinuing the bot entirely</li>
              <li>discord or other platform restrictions</li>
              <li>making the bot unavailable due to technical issues</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              9. open source and modifications
            </h2>
            <p className='mb-4'>
              this bot is open source under the MIT license. you are free to:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>host your own instance of the bot</li>
              <li>modify the code for your own use</li>
              <li>contribute improvements to the project</li>
              <li>fork the repository for your own projects</li>
            </ul>
            <p className='mt-4 font-medium'>
              however, any self-hosted instances are your own responsibility and
              not covered by these terms.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              10. discord platform compliance
            </h2>
            <p className='mb-4'>this bot and its users must comply with:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>discord&apos;s terms of service</li>
              <li>discord&apos;s community guidelines</li>
              <li>discord&apos;s developer terms of service</li>
              <li>any applicable platform policies</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              11. changes to terms
            </h2>
            <p className='mb-4'>
              we reserve the right to modify these terms at any time. changes
              will be effective when:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>posted on this website with an updated date</li>
              <li>
                announced in relevant community channels (when significant)
              </li>
              <li>
                continued use of the bot after changes constitutes acceptance
              </li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>
              12. contact and support
            </h2>
            <p className='mb-4'>for questions, issues, or concerns:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                <strong>github issues:</strong>{' '}
                <a
                  href='https://github.com/conjureme/anti-domo/issues'
                  className='text-indigo-600 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  report bugs or request features
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
                  join support server
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
            <p className='mt-4 text-sm text-gray-600'>
              <strong>please note:</strong> support is provided on a best-effort
              basis. this is a free, open-source project.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>13. governing law</h2>
            <p>
              these terms are governed by the laws of the united states. any
              disputes will be resolved in accordance with applicable law and
              discord&apos;s dispute resolution procedures where relevant.
            </p>
          </section>

          <div className='bg-gray-50 rounded-lg p-6 mt-8'>
            <p className='text-sm text-gray-600'>
              <strong>final note:</strong> this is a passion project created to
              help protect artists from unauthorized AI usage of their work.
              while it can&apos;t prevent all misuse, i do hope this bot helps
              create more respectful online communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

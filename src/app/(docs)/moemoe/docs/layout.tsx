import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className='fumadocs-layout min-h-screen bg-fd-background'
      data-theme='dark'
      style={
        {
          '--color-base-content': 'initial',
          '--color-base-100': 'initial',
          '--color-base-200': 'initial',
          '--color-base-300': 'initial',
        } as React.CSSProperties
      }
    >
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions()}
        sidebar={{
          tabs: [
            {
              title: 'moemoe-discord',
              description: 'docs for the moemoe discord module',
              url: '/moemoe/docs/discord',
            },
          ],
        }}
      >
        {children}
      </DocsLayout>
    </div>
  );
}

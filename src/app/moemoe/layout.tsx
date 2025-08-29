import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

export default function MoemoeDocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className='fumadocs-layout'
      style={
        {
          '--color-base-content': 'initial',
          '--color-base-100': 'initial',
          '--color-base-200': 'initial',
          '--color-base-300': 'initial',
        } as React.CSSProperties
      }
    >
      <RootProvider>{children}</RootProvider>
    </div>
  );
}

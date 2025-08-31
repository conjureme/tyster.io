import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

export default function DocsRootLayout({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen'>
      <RootProvider theme={{ defaultTheme: 'dark', forcedTheme: 'dark' }}>
        {children}
      </RootProvider>
    </div>
  );
}

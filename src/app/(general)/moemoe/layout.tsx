import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

export default function MoemoeDocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <RootProvider>{children}</RootProvider>;
}

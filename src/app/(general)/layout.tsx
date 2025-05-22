import { Toaster } from 'react-hot-toast';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import LenisProvider from '@/components/LenisProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-screen'>
      <main className='h-full'>
        <Toaster position='top-center' />
        <div>
          <LenisProvider>
            <Navbar />
            {children}
            <Footer />
          </LenisProvider>
        </div>
      </main>
    </div>
  );
}

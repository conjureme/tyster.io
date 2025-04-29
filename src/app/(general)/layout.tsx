import { Toaster } from 'react-hot-toast';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
          <Navbar />
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
}

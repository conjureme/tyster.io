import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Toaster position='top-center' />
      <Navbar />
      <main className='flex-1'>{children}</main>
    </div>
  );
}

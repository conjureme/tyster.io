export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative w-full h-full'>
      <main className='relative w-full h-full'>{children}</main>
    </div>
  );
}

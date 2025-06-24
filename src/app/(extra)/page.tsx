import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-base-100'>
      <div className='flex-1 pt-20 pb-4 flex items-center'>
        <div className='max-w-6xl mx-auto px-6 w-full'>
          <div className='grid grid-cols-1 gap-8'>
            <div>
              <h1>hey lol</h1>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

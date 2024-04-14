import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BsCloudUpload } from 'react-icons/bs';
import { HiOutlineSparkles } from 'react-icons/hi';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Process() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto'>
        <Navbar font={montserrat} />
        <main
          className={`flex min-h-[120vh] md:min-h-[110vh] w-full flex-col items-center justify-between py-10 px-8 ${montserrat.className}`}
        >
          <section className='w-full'>
            <div className='my-4'>
              <h2 className='text-gradient text-3xl font-semibold '>
                1. Enter name of food
              </h2>

              <input
                type='text'
                className='w-full md:w-1/2 mt-4 p-2 border-2 rounded-md'
                placeholder='e.g. Brand Name + Product Name'
              />
              <p className='mt-2'>
                if product is maggi then write Nestle Maggi
              </p>
            </div>

            <div className='my-10'>
              <h2 className='text-gradient text-3xl font-semibold '>
                2. Upload a pic of ingredient label
              </h2>
              <div className='w-full h-[200px] shadow-md cursor-pointer border-2 border-black flex flex-col items-center justify-center gap-1 rounded-lg mt-4'>
                <BsCloudUpload className='text-2xl' />
                <p>Drag & Drop or Upload directly</p>
              </div>
            </div>

            <div className='my-10'>
              <h2 className='text-gradient text-3xl font-semibold '>
                3. See the magic
              </h2>

              <button className='w-full md:w-5/12 mt-4 orange-gradient text-white cta flex items-center justify-center gap-2'>
                <HiOutlineSparkles className='text-2xl' />
                Start Scanning
              </button>
            </div>
          </section>
        </main>
      </div>
      <Footer font={montserrat} />
    </>
  );
}

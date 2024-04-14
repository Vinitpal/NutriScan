import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import Landing from '@/components/Home/Landing';
import Navbar from '@/components/Navbar';
import About from '@/components/Home/About';
import Hiw from '@/components/Home/Hiw';
import Banner from '@/components/Home/Banner';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto'>
        <Navbar font={montserrat} />
        <main
          className={`flex min-h-screen w-full flex-col items-center justify-between py-24 px-8 ${montserrat.className}`}
        >
          <Landing />
          <About />
          <Hiw />
          <Banner />
        </main>
      </div>
      <Footer font={montserrat} />
    </>
  );
}

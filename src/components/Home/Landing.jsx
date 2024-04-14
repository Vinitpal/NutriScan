import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Landing = () => {
  const router = useRouter();

  return (
    <section className='flex flex-col md:flex-row items-center justify-between w-full'>
      <div className='w-full md:w-1/2'>
        <h1 className='text-5xl leading-tight font-semibold '>
          Know <span className='text-gradient'>what you eat</span>{' '}
          <br className='hidden md:block' />
          with just three <br className='hidden md:block' />
          simple steps
        </h1>

        <p className='text-xl my-4'>
          Don’t let marketing labels fool you. Know what{' '}
          <br className='hidden md:block' />
          you’re eating to build a healthy life.
        </p>

        <div className='flex items-center gap-8 w-full mt-6 '>
          <button
            className=' w-full orange-gradient text-white cta'
            onClick={() => router.push('/process')}
          >
            Get Started
          </button>

          <button className='w-full bg-tertiary text-white cta'>
            How it works
          </button>
        </div>
      </div>

      <div className='hidden md:block'>
        <Image
          src='/images/landing.png'
          alt='landing'
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Landing;

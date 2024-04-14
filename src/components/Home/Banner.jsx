import React from 'react';
import Image from 'next/image';

const Card = ({ img, text }) => {
  return (
    <div className='w-full md:w-5/12 text-center flex flex-col items-center '>
      <div className='border-8 border-primary rounded-xl w-fit overflow-hidden'>
        <Image
          className='w-[400px] h-[267px] object-cover'
          src={img}
          alt='banner'
          width={400}
          height={400}
        />
      </div>
      <p className='text-lg md:text-xl my-4'>{text}</p>
    </div>
  );
};

const Banner = () => {
  return (
    <section className='w-full my-10 md:my-20'>
      <h2 className='text-gradient text-3xl font-semibold text-center'>
        Eat healthy
      </h2>

      <div className='my-20 flex flex-col md:flex-row justify-center flex-wrap gap-10 '>
        <Card
          img={'/images/banner1.jpg'}
          text={
            <>
              Don’t let marketing labels fool you. Know what{' '}
              <br className='hidden md:block' />
              you’re eating to build a healthy life.
            </>
          }
        />
        <Card
          img={'/images/banner2.jpg'}
          text={
            <>
              Health is Wealth. Know what <br className='hidden md:block' />
              you’re eating to build a healthy life.
            </>
          }
        />
        <Card
          img={'/images/banner3.jpg'}
          text={
            <>
              Health is Wealth. Know what <br className='hidden md:block' />
              you’re eating to build a healthy life.
            </>
          }
        />
        <Card
          img={'/images/banner4.jpg'}
          text={
            <>
              Don’t let marketing labels fool you. Know what{' '}
              <br className='hidden md:block' />
              you’re eating to build a healthy life.
            </>
          }
        />
      </div>
    </section>
  );
};

export default Banner;

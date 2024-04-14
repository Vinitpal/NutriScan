import React from 'react';
import Image from 'next/image';

const Card = ({ icon, tagline }) => {
  return (
    <div className='w-[300px] bg-primary text-white hover:shadow-md font-semibold flex flex-col items-center rounded-md p-8'>
      <Image src={icon} alt='icon' width={92} height={92} />
      <p className='w-3/4 mt-2 text-center'>{tagline}</p>
    </div>
  );
};

const Hiw = () => {
  return (
    <section className='w-full '>
      <h2 className='text-gradient text-3xl font-semibold text-center'>
        How it works
      </h2>

      <div className='my-20 w-full flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-around'>
        <Card
          icon={'/images/keyboard.png'}
          tagline={'Enter the name of food'}
        />
        <Card
          icon={'/images/scanner.png'}
          tagline={'Take a pic of ingredient label'}
        />
        <Card
          icon={'/images/clock.png'}
          tagline={'Wait for us to generate result.'}
        />
      </div>
    </section>
  );
};

export default Hiw;

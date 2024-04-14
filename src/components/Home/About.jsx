import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className='w-full mt-32  mb-10 md:mt-48 md:mb-20  '>
      <h2 className='text-gradient text-3xl font-semibold text-center'>
        Did you know
      </h2>

      <div className='flex flex-col md:flex-row items-center justify-around my-20 '>
        <Image
          src='/images/thinking.jpg'
          alt='thinking'
          width={300}
          height={200}
        />
        <div className='w-full md:w-1/2 flex flex-col gap-10 text-lg leading-relaxed'>
          <p className='bg-primary text-white font-medium py-4 px-8 rounded-md'>
            Will you eat an unripe or expired banana/food? No, right? But how do
            you judge the quality of the food you’re consuming? We all have some
            tips and tricks to judge that based on the different type of fruit.
            Alright now what about that awesome colorful packet of chips that
            has a “save 45%” tag or “healthy for you” tag?
          </p>

          <p className='bg-secondary text-white font-medium py-4 px-8 rounded-md'>
            Some people judge it via expiry date. But Is that enough to judge
            it? Well I am very perceptive of what I eat so. I go even further
            and check the food labels to know what ingredients has been used.
            But I don’t know name and features of every ingredients used. So
            that’s a problem and this app fortunately is made solely to solve
            that problem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

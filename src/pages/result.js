import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BsCloudUpload } from 'react-icons/bs';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useContext } from 'react';
import { GlobalContext } from '@/context/provider';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Result() {
  const { result, imgSrc } = useContext(GlobalContext);

  console.log(result);

  if (!result?.rating)
    return <p className='text-2xl text-center p-20'>404 not found</p>;

  return (
    <>
      <div className='max-w-screen-xl mx-auto'>
        <Navbar font={montserrat} />
        <main
          className={`flex min-h-full md:min-h-screen w-full flex-col items-center justify-between py-10 px-8 ${montserrat.className}`}
        >
          <section className='w-full flex flex-col md:flex-row  gap-12 md:gap-0 items-start justify-center'>
            <div className='w-full md:w-1/2'>
              <h2 className='text-gradient text-3xl font-semibold '>
                Your scanned image
              </h2>

              <div
                className='mt-4 w-full md:w-3/4 h-[450px] rounded-lg bg-gray-300'
                style={{
                  backgroundImage: `url(${imgSrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>

            <div className='w-full h-[170vh] px-2 md:px-2 md:w-2/6 md:h-[500px] md:overflow-y-scroll '>
              <div className='text-2xl font-semibold flex items-center justify-between'>
                <h2>Ratings</h2>
                <h2 className='text-gradient'>{result.rating}</h2>
              </div>

              <hr className='my-6' />

              <div>
                <h2 className='text-2xl font-semibold'>Benefits</h2>

                <ol className='list-decimal ms-5 md:ms-4 my-3'>
                  {result.pros.map((item, idx) => (
                    <li className='my-1' key={idx}>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              <hr className='my-6' />

              <div>
                <h2 className='text-2xl font-semibold'>Disadvantages</h2>

                <ol className='list-decimal ms-5 md:ms-4 my-3'>
                  {result.cons.map((item, idx) => (
                    <li className='my-1' key={idx}>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              <hr className='my-6' />

              <div>
                <h2 className='text-2xl font-semibold'>
                  Potential Health Risk
                </h2>

                <ol className='list-decimal ms-5 md:ms-4 my-3'>
                  {result.healthRisk.map((item, idx) => (
                    <li className='my-1' key={idx}>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              <hr className='my-6' />

              <div>
                <h2 className='text-2xl font-semibold'>Harmful Ingredients</h2>

                <ol className='list-decimal ms-5 md:ms-4 my-3'>
                  {Object.keys(result.harmfulIngredients).map((item, idx) => (
                    <li className='my-1' key={idx}>
                      <b className='font-semibold'>{item}:</b>{' '}
                      {result.harmfulIngredients[item]}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer font={montserrat} />
    </>
  );
}

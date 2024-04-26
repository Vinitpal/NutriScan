import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BsCloudUpload } from 'react-icons/bs';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '@/context/provider';
import { API_URL } from '@/utils/url';
import { useRouter } from 'next/router';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Process() {
  const { imgSrc, setImgSrc, setResult } = useContext(GlobalContext);
  const [imgObj, setImgObj] = useState(null);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // set states to empty on initial load
  useEffect(() => {
    setName('');
    setImgSrc('');
    setResult(null);
  }, []);

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);

    const url = URL.createObjectURL(fileUploaded);

    setImgSrc(url);
    setImgObj(fileUploaded);
  };

  const getData = async () => {
    setLoading(true);

    if (!name) {
      alert('Please enter the name of the food');
      setLoading(false);
      return;
    }

    if (!imgObj) {
      alert('Please upload an image');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('image', imgObj);
    formData.append('name', name);

    const url = await fetch(`${API_URL}/food/details`, {
      method: 'POST',
      body: formData,
    });

    const response = await url.json();
    console.log(response);

    if (response.msg === 'success') {
      setResult(response.data);
      router.push('/result');
    } else {
      alert('Error parsing the image, please upload a clear or valid image');
    }

    setLoading(false);
    return;

    // navigate to results page
  };

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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className='mt-2'>
                if product is maggi then write Nestle Maggi
              </p>
            </div>

            <div className='my-10'>
              <h2 className='text-gradient text-3xl font-semibold '>
                2. Upload a pic of ingredient label
              </h2>
              <div
                className='w-full h-[200px] shadow-md cursor-pointer border-2 border-black flex flex-col items-center justify-center gap-1 rounded-lg mt-4'
                onClick={handleClick}
                style={
                  imgSrc
                    ? {
                        backgroundImage: `url(${imgSrc})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : {}
                }
              >
                <BsCloudUpload className='text-2xl' />
                <p>Drag & Drop or Upload directly</p>
                <input
                  type='file'
                  onChange={handleChange}
                  ref={hiddenFileInput}
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            <div className='my-10'>
              <h2 className='text-gradient text-3xl font-semibold '>
                3. See the magic
              </h2>

              <button
                className='w-full md:w-5/12 mt-4 orange-gradient text-white cta flex items-center justify-center gap-2'
                onClick={() => getData()}
              >
                {loading ? (
                  'Loading ....'
                ) : (
                  <>
                    <HiOutlineSparkles className='text-2xl' />
                    "Start Scanning"
                  </>
                )}
              </button>
            </div>
          </section>
        </main>
      </div>
      <Footer font={montserrat} />
    </>
  );
}

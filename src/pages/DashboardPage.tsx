import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import LoadingAnimation from '../components/Loading';
import { useTheme } from '../components/Theme';

import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import Footer from '../components/Footer';
import png from '../images/png-transparent-logo-contracting-photography-logo-symbol.png';

import Leftsidebar from '../components/Leftsidebar';
import MainTable from '../components/MainTable';
import Rightsidebar from '../components/Rightsidebar';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='relative h-screen flex flex-col'>
      <div className='absolute inset-0 h-[50vh]'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover' }}
        >
          <div className='absolute inset-0 bg-black opacity-50'></div>
        </div>
      </div>
      <div className='absolute bottom-0 inset-x-0 h-[50vh] bg-gray-900 z-10'></div>

      <div className='flex-grow flex flex-col z-20'>
        <div className='flex flex-grow'>
          <div className='hidden lg:block w-16 flex-shrink-0'>
            <Leftsidebar />
          </div>

          <div className='flex-grow ml-8 mr-32 flex flex-col'>
            <div className='flex-grow overflow-y-auto pt-28'>
              <MainTable />
            </div>
          </div>

          <div className='hidden lg:block w-32 flex-shrink-0'>
            <Rightsidebar />
          </div>
          <button
            className='lg:hidden fixed top-4 right-4 z-30 p-2 rounded-full bg-gray-800 text-white'
            onClick={() => setShowSidebar(!showSidebar)}
          >
            ☰
          </button>
        </div>

        <div className='h-12 flex-shrink-0'>
          <Footer />
        </div>
      </div>

      {showSidebar && (
        <div className='lg:hidden fixed inset-0 bg-gray-900 bg-opacity-80 z-20 flex flex-col'>
          <div className='p-4'>
            <button
              className='text-white text-2xl'
              onClick={() => setShowSidebar(false)}
            >
              ×
            </button>
          </div>
          <Rightsidebar />
        </div>
      )}

      <div className='lg:hidden fixed bottom-0 inset-x-0 bg-gray-800 p-4 flex justify-center'>
        <Leftsidebar />
      </div>
    </div>
  );
};

export default Dashboard;

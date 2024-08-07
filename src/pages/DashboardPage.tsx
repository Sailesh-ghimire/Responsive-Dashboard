import { useState } from 'react';

import image1 from '../images/img1.jpg';
import Footer from '../components/Footer';

import Leftsidebar from '../components/Leftsidebar';
import MainTable from '../components/MainTable';
import Rightsidebar from '../components/Rightsidebar';
import Bottombar from '../components/Bottombar';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='relative min-h-screen flex flex-col bg-gray-900'>
      <div className='absolute inset-0 h-[50vh]'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover' }}
        >
          <div className='absolute inset-0 bg-black opacity-50'></div>
        </div>
      </div>

      <div className='relative z-10 flex-grow pt-[50vh] lg:pt-0'>
        <div className='flex flex-col flex-grow'>
          <div className='flex-grow flex'>
            <div className='hidden lg:block w-16 flex-shrink-0'>
              <Leftsidebar />
            </div>
            <div className='flex-grow ml-4 mr-8 md:ml-8 md:mr-16 lg:ml-16 lg:mr-32 flex flex-col lg:pt-[15vh]'>
              <div className='flex-grow  '>
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

      <div className='lg:hidden fixed bottom-0 inset-x-0 bg-green-800 p-4 flex justify-center z-20'>
        <div className='flex items-center'>
          {/* <Leftsidebar /> */}

          <Bottombar />
        </div>
      </div>

      <footer className='relative bottom-0 inset-x-0 z-10'>
        <div className='h-12 flex-shrink-0 bg-gray-900'>
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;

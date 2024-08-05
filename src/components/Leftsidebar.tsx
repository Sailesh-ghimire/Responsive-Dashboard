import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import HomeIcon from '@mui/icons-material/Home';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';

const Leftsidebar = () => {
  return (
    <div
      className='hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:flex-col lg:items-center lg:justify-between lg:w-14 lg:bg-gray-600 lg:bg-opacity-70 lg:rounded-br-3xl lg:z-20 lg:shadow-lg lg:py-4 lg:px-2'
      style={{ height: 'calc(100vh - 3rem)' }}
    >
      <div className='flex flex-col space-y-4'>
        <div className='w-12 h-12 rounded-full flex items-center justify-center bg-gray-700'>
          <HomeIcon className='text-white' />
        </div>
        <div className='w-12 h-12 rounded-full flex items-center justify-center bg-gray-700'>
          <WidgetsOutlinedIcon className='text-white' />
        </div>
        <div className='w-12 h-12 rounded-full flex items-center justify-center bg-gray-700'>
          <NotificationsNoneOutlinedIcon className='text-white' />
        </div>
      </div>
      <div className='flex flex-col space-y-4'>
        <div className='w-12 h-12 rounded-full flex items-center justify-center bg-gray-700'>
          <ErrorOutlinedIcon className='text-white' />
        </div>
        <div className='w-12 h-12 rounded-full flex items-center justify-center bg-gray-700'>
          <FacebookOutlinedIcon className='text-white' />
        </div>
        <div className='w-12 h-12 rounded-full flex items-center justify-center bg-gray-700'>
          <SubscriptionsOutlinedIcon className='text-white' />
        </div>
      </div>
    </div>
  );
};

export default Leftsidebar;

import HomeIcon from '@mui/icons-material/Home';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';

const Bottombar = () => {
  return (
    <div className='fixed bottom-0 inset-x-0 bg-slate-800 p-1 flex justify-center z-20 lg:hidden'>
      <div className='flex items-center space-x-4'>
        <div className='w-12 h-12 rounded-full flex items-center justify-center bg-gray-700'>
          <HomeIcon className='text-white' />
        </div>
        <div className='w-12 h-12 rounded-full flex items-center justify-center bg-gray-700'>
          <WidgetsOutlinedIcon className='text-white' />
        </div>
        <div className='w-12 h-12 rounded-full flex items-center justify-center bg-gray-700'>
          <NotificationsNoneOutlinedIcon className='text-white' />
        </div>
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

export default Bottombar;

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';

const Footer = () => {
  return (
    <div className='w-full bg-gray-900 h-full flex items-center justify-center text-white'>
      <div className='container mx-auto flex justify-between'>
        <div className='flex space-x-4'>
          <div className='w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center'>
            <HomeOutlinedIcon />
          </div>
          <div className='w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center'>
            <HomeOutlinedIcon />
          </div>
          <div className='w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center'>
            <HomeOutlinedIcon />
          </div>
        </div>

        <div className='flex space-x-4'>
          <FacebookOutlinedIcon />
          <SubscriptionsOutlinedIcon />
          <GTranslateOutlinedIcon />
        </div>

        <div className='text-sm flex items-center'>
          <p className='m-2'>TrustPilot</p>
          <p className='m-2 text-green-600'>4.3</p>
          <p className='m-2'>PlayersAction © 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

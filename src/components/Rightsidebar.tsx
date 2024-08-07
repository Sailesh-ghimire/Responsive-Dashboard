const Rightsidebar = () => {
  return (
    <div
      className='fixed inset-y-0 right-0 flex flex-col space-y-4 z-20 bg-gray-800 bg-opacity-70 p-4 rounded-l-3xl shadow-lg'
      style={{ height: 'calc(100vh - 3rem)' }}
    >
      <div className='bg-gray-900 p-4 flex-shrink-0 flex flex-col items-center space-y-4 rounded-3xl'>
        <div className='flex items-center space-x-4'>
          <img
            src='https://avatar.iran.liara.run/public/boy?username=Ash'
            alt='Profile'
            className='w-16 h-16 rounded-full'
          />
          <div className='flex flex-col space-y-2'>
            <div className='w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center'>
              <span className='text-white text-xs'>🏆</span>
            </div>
            <div className='w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center'>
              <span className='text-white text-xs'>🎮</span>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='text-sm text-gray-400 mb-2'>Level Progress</div>
          <div className='w-full bg-gray-500 rounded-full h-2'>
            <div
              className='bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 h-full rounded-full'
              style={{ width: '80%' }}
            ></div>
          </div>
          <div className='flex justify-between text-xs text-gray-400 mt-1'>
            <span>Level 10</span>
            <span>Level 11</span>
          </div>
        </div>
      </div>
      <div className='bg-gray-700 p-4 flex-shrink-0 flex flex-col rounded-3xl'>
        <span className='text-white text-sm font-medium'>
          Account Calculator
        </span>
        <span className='text-gray-400 text-xs'>
          Evaluate your account value.
        </span>
      </div>
      <div className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 flex-shrink-0 rounded-3xl'>
        <span className='text-white text-sm font-medium'>
          Game Currency Price Tracker
        </span>
      </div>
      <div className='bg-gray-700 p-4 flex-grow rounded-3xl'>
        <span className='text-white text-sm font-medium'>
          Your Game Statistics
        </span>
        <div className='grid grid-cols-2 gap-2 mt-2'>
          <div className='bg-blue-600 p-2 rounded text-white text-xs'>
            Stats 1
          </div>
          <div className='bg-red-600 p-2 rounded text-white text-xs'>
            Stats 2
          </div>
          <div className='bg-green-600 p-2 rounded text-white text-xs'>
            Stats 3
          </div>
          <div className='bg-yellow-600 p-2 rounded text-black text-xs'>
            Stats 4
          </div>
        </div>
      </div>
      <div className='bg-gray-700 p-4 flex-shrink-0 rounded-3xl'>
        <span className='text-white font-semibold text-sm'>
          Guides and Tips for Players
        </span>
        <div className='flex flex-col space-y-2 mt-2'>
          <div className='bg-gray-600 bg-opacity-50 p-2 rounded shadow-sm'>
            <span className='text-white text-xs'>Notification 1</span>
          </div>
          <div className='bg-gray-600 bg-opacity-50 p-2 rounded shadow-sm'>
            <span className='text-white text-xs'>Notification 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightsidebar;

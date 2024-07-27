const LoadingAnimation = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900'>
      <div className='flex flex-col items-center'>
        <div className='w-16 h-16 border-4 border-t-4 border-blue-600 border-opacity-50 rounded-full animate-spin'></div>
        <p className='mt-4 text-white text-lg'>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingAnimation;

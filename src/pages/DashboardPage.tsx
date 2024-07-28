import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import LoadingAnimation from '../components/Loading';
import { useTheme } from '../components/Theme';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setData('Sample data loaded');
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div
      className={`min-h-screen ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } flex flex-col`}
    >
      <Navbar />
      <div className='flex-grow container mx-auto p-6'>
        <h1 className='text-3xl font-bold mb-4'>Welcome to the Dashboard!</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div
            className={`p-4 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
            } rounded shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <h2 className='text-xl font-bold mb-2'>Card 1</h2>
            <p>{data} for card 1.</p>
          </div>
          <div
            className={`p-4 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
            } rounded shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {' '}
            <h2 className='text-xl font-bold mb-2'>Card 2</h2>
            <p>{data} for card 2.</p>
          </div>
          <div
            className={`p-4 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
            } rounded shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {' '}
            <h2 className='text-xl font-bold mb-2'>Card 3</h2>
            <p>{data} for card 3.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

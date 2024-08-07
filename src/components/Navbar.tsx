import { useNavigate } from 'react-router-dom';
import { useTheme } from './Theme';

const Navbar = () => {
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className='p-4 bg-gray-800 text-white flex justify-between items-center'>
      <div className='text-lg font-bold'>My Dashboard</div>
      <div className='flex items-center space-x-4'>
        <button onClick={toggleTheme} className='px-4 py-2 bg-blue-600 rounded'>
          Toggle Theme
        </button>
        <button onClick={handleLogout} className='px-4 py-2 bg-red-600 rounded'>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

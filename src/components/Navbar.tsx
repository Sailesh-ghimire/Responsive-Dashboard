import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');

    dispatch(logout());

    navigate('/login');
  };
  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-white text-2xl font-bold'>Dashboard</h1>
        <button
          onClick={handleLogout}
          className='px-4 py-2 text-white bg-red-600 rounded hover:bg-red-500'
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

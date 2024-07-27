import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginFailure, loginRequest, loginSuccess } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../auth/authApi';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginRequest());
    try {
      const response = await loginApi(email, password);
      if (response.success) {
        dispatch(loginSuccess(email));
        toast.success('Login successful');

        navigate('/dashboard');
      }
    } catch (err: any) {
      dispatch(loginFailure());
      setError(err.message);
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900'>
      <div className='w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg'>
        <h2 className='text-3xl font-bold text-center text-white mb-6'>
          Login
        </h2>
        <form onSubmit={handleLogin} className='space-y-4'>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-200'>
              Email
            </label>
            <input
              type='email'
              className='w-full px-4 py-2 text-sm text-gray-900 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-200'>
              Password
            </label>
            <input
              type='password'
              className='w-full px-4 py-2 text-sm text-gray-900 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className='text-sm text-red-500'>{error}</p>}
          <button
            type='submit'
            className='w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-300'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

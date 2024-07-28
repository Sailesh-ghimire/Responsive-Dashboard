import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginFailure, loginRequest, loginSuccess } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../auth/authApi';
import { toast, ToastContainer } from 'react-toastify';
import { useTheme } from '../components/Theme';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const loginSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .nonempty('Password is required'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;
const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: LoginFormInputs) => {
    dispatch(loginRequest());
    try {
      const response = await loginApi(data.email, data.password);
      if (response.success) {
        dispatch(loginSuccess(data.email));
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
    <div
      className={`flex items-center justify-center min-h-screen ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <ToastContainer />
      <button
        onClick={toggleTheme}
        className={`absolute top-4 right-4 px-4 py-2 ${
          theme === 'dark'
            ? 'text-white bg-blue-600'
            : 'text-gray-900 bg-blue-400'
        } rounded hover:bg-blue-500 transition duration-300`}
      >
        Toggle Theme
      </button>
      <div
        className={`w-full max-w-md p-8 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
        } rounded-lg shadow-lg`}
      >
        <h2 className='text-3xl font-bold text-center mb-6'>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)} className='space-y-4'>
          <div className='space-y-2'>
            <label className='block text-sm font-medium'>Email</label>
            <input
              type='email'
              className={`w-full px-4 py-2 text-sm ${
                theme === 'dark'
                  ? 'text-gray-900 bg-gray-200'
                  : 'text-gray-900 bg-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...register('email')}
            />
            {errors.email && (
              <p className='text-sm text-red-500'>{errors.email.message}</p>
            )}
          </div>
          <div className='space-y-2'>
            <label className='block text-sm font-medium'>Password</label>
            <input
              type='password'
              className={`w-full px-4 py-2 text-sm ${
                theme === 'dark'
                  ? 'text-gray-900 bg-gray-200'
                  : 'text-gray-900 bg-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...register('password')}
            />
            {errors.password && (
              <p className='text-sm text-red-500'>{errors.password.message}</p>
            )}
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

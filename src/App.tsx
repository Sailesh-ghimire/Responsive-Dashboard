import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from './pages/LoginPage';
import Dashboard from './pages/DashboardPage';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path='/' element={<Navigate to='/dashboard' />} />
      </Routes>
    </Router>
  );
};

export default App;

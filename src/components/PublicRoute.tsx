import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PublicRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem('token');
  return token ? <Navigate to='/dashboard' /> : children;
};

export default PublicRoute;

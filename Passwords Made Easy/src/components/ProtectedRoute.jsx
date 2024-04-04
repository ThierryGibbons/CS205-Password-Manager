import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; // Assuming you're using the Auth0 React SDK

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

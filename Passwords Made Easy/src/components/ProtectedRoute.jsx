import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, error } = useAuth0();

  // Log the authentication state and any errors
  console.log("Authentication State:", { isAuthenticated, isLoading, error });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // Commenting out the redirect to stop automatic redirection to the login page
    // loginWithRedirect();
    console.log('User is not authenticated. Redirect to login is paused for debugging.');
    return <div>Redirecting to login is paused for debugging purposes.</div>;
  }

  // If authenticated, render the children components
  return children;
};

export default ProtectedRoute;

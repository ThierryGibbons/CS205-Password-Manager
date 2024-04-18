import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const CallbackHandler = () => {
    const navigate = useNavigate();
    const { isAuthenticated, isLoading, error } = useAuth0();

    useEffect(() => {
        if (isLoading) {
            // Still waiting for authentication result
            return;
        }

        if (error) {
            console.error('Authentication error:', error.description);
            // Navigate to an error page or display an error message
            navigate('/error'); // Ensure you have a route for '/error'
            return;
        }

        if (isAuthenticated) {
            navigate('/account'); // Successful authentication
        } else {
            navigate('/'); // Not authenticated, redirect to home or login page
        }
    }, [navigate, isAuthenticated, isLoading, error]);

    // Show a loading indicator while checking the auth state
    return <div>Loading...</div>;
};

export default CallbackHandler;

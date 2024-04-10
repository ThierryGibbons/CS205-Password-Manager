import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/index";
import BlogPage from "./pages/blog";
import AccountPage from "./pages/account";
import GetStartedPage from "./pages/getstarted";

// Enhanced Callback handler component to handle tokens
const CallbackHandler = () => {
  const location = useLocation();

  React.useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const accessToken = queryParams.get('access_token');
    const idToken = queryParams.get('id_token');

    if (accessToken && idToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('idToken', idToken);
      // Redirecting to account page while removing tokens from the URL
      window.location.href = "/account";
    }
  }, [location]);

  // Optionally, you can add a loading indicator here
  return <div>Loading...</div>;
};

function App() {
  return (
    <div className="bg-background-default">
      <div className="App flex flex-col h-screen">
        <div className="h-24">
          <Navbar />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/account" element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            } />
            <Route path="/getstarted" element={<GetStartedPage />} />
            <Route path="/callback" element={<CallbackHandler />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

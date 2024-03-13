import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/index";
import BlogPage from "./pages/blog";
import AccountPage from "./pages/account";

function App() {
  return (
    <div className="bg-background">
      <>
        <div className="App flex flex-col h-screen">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;

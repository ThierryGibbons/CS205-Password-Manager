import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/index";
import BlogPage from "./pages/blog";
import AccountPage from "./pages/account";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null); // Create a ref for the Navbar

  useEffect(() => {
    // Measure the height of the Navbar after the component mounts
    console.log("before?: ", navbarRef.current); // Check if the ref is attached
    if (navbarRef.current) {
      console.log("something: ", navbarRef.current.offsetHeight); // Check the measured height
      setNavbarHeight(navbarRef.current.offsetHeight); // This sets the navbar's height
    }
  }, []); // Empty dependency array ensures this runs once after initial render

  console.log("navbar height: ", navbarHeight); // Check the state update

  return (
    <>
      <>
        <div className="App flex flex-col h-screen">
          <div ref={navbarRef}>
            <Navbar />
          </div>
          <div
            style={{ paddingBottom: `${navbarHeight}px` }}
            className="flex-1 flex items-center justify-center"
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
          </div>
        </div>
      </>
    </>
  );
}

export default App;

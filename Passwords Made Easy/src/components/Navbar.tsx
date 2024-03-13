// src/components/Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="/"
            className="text-text hover:text-accent text-2xl font-bold font-Poppins"
          >
            Passwords Made Easy
          </a>
          <div>
            <a
              href="/blog"
              className="px-3 py-2 rounded text-text hover:text-accent font-Poppins font-light text-xl"
            >
              Blog
            </a>
            <a
              href="/account"
              className="px-3 py-2 rounded text-text hover:text-accent font-Poppins font-light text-xl"
            >
              Account
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

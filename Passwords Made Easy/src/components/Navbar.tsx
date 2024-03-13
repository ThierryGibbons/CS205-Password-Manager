// src/components/Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-primary text-lg font-semibold">
            Passwords Made Easy
          </a>
          <div>
            <a
              href="/blog"
              className="px-3 py-2 rounded text-primary hover:text-secondary"
            >
              Blog
            </a>
            <a
              href="/account"
              className="px-3 py-2 rounded text-primary hover:text-secondary"
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

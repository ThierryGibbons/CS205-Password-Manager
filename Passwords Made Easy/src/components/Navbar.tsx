import React from "react";
import { Link } from "react-router-dom";
import InteractiveText from "./InteractiveText";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="/"
            className="text-text-default hover:text-accent-default text-2xl font-bold font-Poppins"
          >
            <InteractiveText originalText="Passwords" />{" "}
            <InteractiveText originalText="Made" />{" "}
            <InteractiveText originalText="Easy" />
          </a>
          <div>
            <a
              href="/blog"
              className="px-3 py-2 rounded text-text-default hover:text-accent-default font-Poppins font-light text-xl"
            >
              Blog
            </a>
            <a
              href="/account"
              className="px-3 py-2 rounded text-text-default hover:text-accent-default font-Poppins font-light text-xl"
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

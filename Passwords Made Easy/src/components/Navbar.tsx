import React from "react";
import InteractiveText from "./InteractiveText";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="p-4">
        <div className="lg:hidden text-center">
          <p className="lg:hidden text-text-default text-4xl font-bold font-Poppins">Passwords Made Easy</p>
        </div>
        <div className="hidden text-center lg:container lg:mx-auto lg:flex lg:justify-between lg:items-center">
          <a
            href="/"
            className="text-text-default hover:text-accent-default text-4xl lg:text-2xl font-bold font-Poppins"
          >
            <InteractiveText originalText="Passwords" />{" "}
            <InteractiveText originalText="Made" />{" "}
            <InteractiveText originalText="Easy" />
          </a>
          <div>
            <a
              href="/blog"
              className="px-3 py-2 rounded text-text-default hover:text-accent-default font-Poppins font-light text-2xl lg:text-xl"
            >
              Blog
            </a>
            <a
              href="/account"
              className="px-3 py-2 rounded text-text-default hover:text-accent-default font-Poppins font-light text-2xl lg:text-xl"
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

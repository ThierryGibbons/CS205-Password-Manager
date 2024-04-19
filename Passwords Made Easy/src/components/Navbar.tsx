import { Link } from "react-router-dom";
import InteractiveText from "./InteractiveText";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <nav className="p-4">
        <div className="lg:hidden text-center">
          <p className="lg:hidden text-text-default text-4xl font-bold font-Poppins">
            Passwords Made Easy
          </p>
        </div>
        <div className="hidden text-center lg:container lg:mx-auto lg:flex lg:justify-between lg:items-center">
          <Link
            to="/"
            className="text-text-default hover:text-accent-default text-4xl lg:text-2xl font-bold font-Poppins"
          >
            <InteractiveText originalText="Passwords" />{" "}
            <InteractiveText originalText="Made" />{" "}
            <InteractiveText originalText="Easy" />
          </Link>
          <div>
            {isAuthenticated ? (
              <button
                // onClick={() => logout({ returnTo: window.location.origin })}
                onClick={() => logout()}
                className="px-3 py-2 rounded text-text-default hover:text-accent-default font-Poppins font-light text-xl mr-2"
              >
                Log Out
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="px-3 py-2 rounded text-text-default hover:text-accent-default font-Poppins font-light text-xl mr-2"
              >
                Log In
              </button>
            )}
            <Link
              to="/blog"
              className="px-3 py-2 rounded text-text-default hover:text-accent-default font-Poppins font-light text-xl"
            >
              Blog
            </Link>
            <Link
              to="/account"
              className="px-3 py-2 rounded text-text-default hover:text-accent-default font-Poppins font-light text-xl"
            >
              Account
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

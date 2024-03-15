const ButtonPassword = ({ v }: { v: string }) => {
  if (v == "full") {
    return (
      <a href="/">
        <div className="bg-background-900 p-4 mb-4 rounded-lg flex items-center gap-2">
          {/* lock svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
              clipRule="evenodd"
            />
          </svg>

          <a className="text-text-default text-base font-bold font-Poppins">
            Passwords
          </a>
        </div>
      </a>
    );
  } else if (v == "half") {
    return (
      <a href="/">
        <div className="bg-background-900 p-4 mb-4 rounded-lg flex items-center gap-2">
          {/* lock svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </a>
    );
  }
};

const ButtonAlert = ({ v }: { v: string }) => {
  if (v == "full") {
    return (
      <a href="/alert">
        <div className="bg-background-900 p-4 mb-4 rounded-lg flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
              clipRule="evenodd"
            />
          </svg>
          <a className="text-text-default text-base font-bold font-Poppins">
            Alerts
          </a>
        </div>
      </a>
    );
  } else if (v == "half") {
    return (
      <a href="/alert">
        <div className="bg-background-900 p-4 mb-4 rounded-lg flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </a>
    );
  }
};

const ButtonAccount = ({ v }: { v: string }) => {
  if (v == "full") {
    return (
      <a href="/account">
        <div className="bg-background-900 p-4 mb-4 rounded-lg flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
          <a className="text-text-default text-base font-bold font-Poppins">
            Account
          </a>
        </div>
      </a>
    );
  } else if (v == "half") {
    return (
      <a href="/account">
        <div className="bg-background-900 p-4 mb-4 rounded-lg flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </a>
    );
  }
};

const NavBar = ({ v }: { v: string }) => {
  if (v == "Password") {
    return (
      <nav className="pb-4">
        <div className="container mx-auto flex justify-between items-center gap-4">
          <div className="hover:text-accent-400">
            <ButtonPassword v="full" />
          </div>
          <div className="hover:text-accent-400">
            <ButtonAlert v="half" />
          </div>
          <div className="hover:text-accent-400">
            <ButtonAccount v="half" />
          </div>
        </div>
      </nav>
    );
  } else if (v == "Alert") {
    return (
      <nav className="pb-4">
        <div className="container mx-auto flex justify-between items-center gap-4">
          <div className="hover:text-accent-400">
            <ButtonPassword v="half" />
          </div>
          <div className="hover:text-accent-400">
            <ButtonAlert v="full" />
          </div>
          <div className="hover:text-accent-400">
            <ButtonAccount v="half" />
          </div>
        </div>
      </nav>
    );
  } else if (v == "Account") {
    return (
      <nav className="pb-4">
        <div className="container mx-auto flex justify-between items-center gap-4">
          <div className="hover:text-accent-400">
            <ButtonPassword v="half" />
          </div>
          <div className="hover:text-accent-400">
            <ButtonAlert v="half" />
          </div>
          <div className="hover:text-accent-400">
            <ButtonAccount v="full" />
          </div>
        </div>
      </nav>
    );
  }
};

export default NavBar;

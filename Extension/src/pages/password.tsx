import { useEffect, useState } from "react";
import { GetData } from "../components/PasswordData";

interface PasswordEntry {
  site: string;
  url: string;
  user: string;
  password: string;
  notes: string;
}

const PasswordPage = () => {
  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);

  GetData();
  useEffect(() => {
    setPasswords(JSON.parse(localStorage.getItem("passwords") || "[]"));
    console.log("passwords", passwords);
  }, []);

  return (
    <div>
      <h1 className="font-Poppins font-bold text-text-default p-18">
        Password Page
      </h1>
      <div className="container mx-auto flex justify-center items-center gap-2">
        <div className="bg-secondary-default p-3 rounded-lg flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            />
          </svg>
        </div>
        <div className="bg-primary-default p-3 rounded-lg flex items-center">
          <input
            className="bg-transparent text-text-950 font-Poppins placeholder-text-950 border border-transparent"
            placeholder="Passwords"
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <a href="#pwdCreate">
          <div className="bg-secondary-default p-3 rounded-lg flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </a>
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col">
          {passwords.map((entry, index) => (
            <a
              key={index}
              href={`#pwdView-${entry.site}`}
              className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[30vw] items-center"
            >
              {entry.site}
            </a>
          ))}
        </div>
        <div className="flex flex-col">
          {passwords.map((entry, index) => (
            <a
              key={index}
              href={`#pwdView-${entry.site}`}
              rel="noopener noreferrer"
              className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center"
            >
              {entry.url}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasswordPage;

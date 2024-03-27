import { useEffect, useState } from "react";
import PasswordData from "../components/PasswordData";

interface PasswordEntry {
  site: string;
  url: string;
  user: string;
  password: string;
  notes: string;
}

const PasswordPage = () => {
  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);

  useEffect(() => {
    setPasswords(JSON.parse(localStorage.getItem("passwords") || "[]"));
  }, []);

  return (
    <div>
      <PasswordData />
      <h1 className="font-Poppins font-bold p-18">Password Page</h1>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col">
          {passwords.map((entry, index) => (
            <a
              key={index}
              href={`#pwdView-${entry.site}`}
              className="font-Poppins font-bold bg-background-900 p-3 m-2 rounded-lg w-[30vw] items-center"
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
              className="font-Poppins font-bold bg-background-900 p-3 m-2 rounded-lg w-[60vw] items-center"
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

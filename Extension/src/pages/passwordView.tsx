import { useEffect, useState } from "react";
import PasswordData from "../components/PasswordData";

interface PasswordEntry {
  site: string;
  url: string;
  user: string;
  password: string;
  notes: string;
}

const PasswordView = () => {
  const [hash, setHash] = useState("");

  // Get # path from URL
  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);

  useEffect(() => {
    setPasswords(JSON.parse(localStorage.getItem("passwords") || "[]"));
  }, []);

  // Convert #pwdView-Site to Site
  const site = hash.replace("#pwdView-", "");

  return (
    <div>
      <PasswordData />
      <h1 className="font-Poppins font-bold p-18">Password View Page</h1>
      {passwords.map((entry, index) => {
        if (entry.site === site) {
          return (
            <div key={index} className="flex flex-row justify-center">
              <div className="flex flex-col">
                <div className="font-Poppins font-bold bg-background-900 p-3 m-2 rounded-lg w-[30vw] items-center">
                  Site
                </div>
                <div className="font-Poppins font-bold bg-background-900 p-3 m-2 rounded-lg w-[30vw] items-center">
                  URL
                </div>
                <div className="font-Poppins font-bold bg-background-900 p-3 m-2 rounded-lg w-[30vw] items-center">
                  User
                </div>
                <div className="font-Poppins font-bold bg-background-900 p-3 m-2 rounded-lg w-[30vw] items-center">
                  Password
                </div>
                <div className="font-Poppins font-bold bg-background-900 p-3 m-2 rounded-lg w-[30vw] items-center">
                  Notes
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-Poppins font-bold bg-background-900 p-3 m-2 rounded-lg w-[60vw] items-center">
                  {entry.site}
                </div>
                <div className="font-Poppins font-bold bg-background-900 p-3 m-2 rounded-lg w-[60vw] items-center">
                  {entry.url}
                </div>
                <div className="font-Poppins font-bold bg-background-900 p-3 m-2 rounded-lg w-[60vw] items-center">
                  {entry.user}
                </div>
                <div className="font-Poppins font-bold bg-background-900 p-3 m-2 rounded-lg w-[60vw] items-center">
                  {entry.password}
                </div>
                <div className="font-Poppins font-bold bg-background-900 p-3 m-2 rounded-lg w-[60vw] items-center">
                  {entry.notes}
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default PasswordView;

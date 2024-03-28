import { useEffect, useState } from "react";
import { DeleteData } from "../components/PasswordData";

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

  const deleteButton = () => {
    // Delete data from server
    DeleteData(site);
  };

  return (
    <div>
      <h1 className="font-Poppins font-bold text-text-default p-18">
        Password View Page
      </h1>
      {passwords.map((entry, index) => {
        if (entry.site === site) {
          return (
            <div key={index} className="flex flex-row justify-center">
              <div className="flex flex-col">
                <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[30vw] items-center">
                  Site
                </div>
                <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[30vw] items-center">
                  URL
                </div>
                <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[30vw] items-center">
                  User
                </div>
                <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[30vw] items-center">
                  Password
                </div>
                <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[30vw] items-center">
                  Notes
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center">
                  {entry.site}
                </div>
                <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center">
                  {entry.url}
                </div>
                <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center">
                  {entry.user}
                </div>
                <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center">
                  {entry.password}
                </div>
                <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center">
                  {entry.notes}
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* Footer Buttons */}
      <div className="flex inset-x-0 bottom-0">
        <button
          className="bg-secondary-default text-text-default p-4 rounded-lg flex items-center gap-2"
          onClick={deleteButton}
        >
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          <span className="text-sm font-bold font-Poppins">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default PasswordView;

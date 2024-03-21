import React, { useState, useEffect } from "react";

interface PasswordEntry {
  site: string;
  url: string;
  user: string;
  password: string;
  notes: string;
}

const PasswordPage = () => {
  // Retrieve data from server
  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/") // Make sure the URL matches your Flask server URL
      .then((response) => response.json())
      .then((data) => {
        setPasswords(data.passwords); // Assuming the JSON structure has a "passwords" key
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1 className="font-Poppins font-bold p-18">Password Page</h1>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col">
          {passwords.map((entry, index) => (
            <a
              key={index}
              href={`pwdView#${entry.site}`}
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
              href={`pwdView#${entry.site}`}
              target="_blank"
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

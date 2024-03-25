import { useState, useEffect } from "react";

interface PasswordEntry {
  site: string;
  url: string;
  user: string;
  password: string;
  notes: string;
}

const PasswordData = () => {
  // Retrieve data from server
  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/") // Make sure the URL matches your Flask server URL
      .then((response) => response.json())
      .then((data) => {
        setPasswords(data.passwords); // Assuming the JSON structure has a "passwords" key

        // Local Storage
        localStorage.setItem("passwords", JSON.stringify(data.passwords));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  // return loading status
  if (passwords.length === 0) {
    return <div>Loading...</div>;
  }

  return;
};

export default PasswordData;

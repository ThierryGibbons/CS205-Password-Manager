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
    fetch("http://127.0.0.1:5000/items", {
      // Make sure the URL matches your Flask server URL
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // setPasswords(data.passwords); // Assuming the JSON structure has a "passwords" key

        // Local Storage
        // localStorage.setItem("passwords", JSON.stringify(data.passwords));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  // create passwords
  useEffect(() => {
    fetch("http://127.0.0.1:5000/items", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        site: "example.com",
        url: "https://example.com",
        user: "example",
        password: "password",
        notes: "example notes",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
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

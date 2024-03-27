import { useState, useEffect } from "react";

interface PasswordEntry {
  id: number;
  site: string;
  url: string;
  user: string;
  password: string;
  notes: string;
}

const GetData = () => {
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
        // console.log(data);
        console.log(data.response);
        setPasswords(data.response);

        // Local Storage
        localStorage.setItem("passwords", JSON.stringify(passwords));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []); // Empty dependency array means this effect runs once on mount
};

const AddData = () => {
  // create passwords

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
};

const DeleteData = () => {
  // Remove Passwords

  fetch("http://127.0.0.1:5000/itemsD", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      site: "example.com",
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
};

export { GetData, AddData, DeleteData };

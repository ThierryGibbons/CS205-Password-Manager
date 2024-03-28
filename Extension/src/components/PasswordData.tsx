import { useEffect } from "react";

// interface PasswordEntry {
//   id: number;
//   site: string;
//   url: string;
//   user: string;
//   password: string;
//   notes: string;
// }

const GetData = () => {
  // Retrieve data from server
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
        console.log(data.response);

        // Local Storage
        localStorage.setItem("passwords", JSON.stringify(data.response));
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

const UpdateData = (
  id: number,
  site: string,
  url: string,
  user: string,
  password: string,
  notes: string
) => {
  // Update Passwords

  fetch("http://127.0.0.1:5000/itemsU", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      site: site,
      url: url,
      user: user,
      password: password,
      notes: notes,
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

const DeleteData = (site: string) => {
  // Remove Passwords

  fetch("http://127.0.0.1:5000/itemsD", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      site: site,
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

export { GetData, AddData, UpdateData, DeleteData };

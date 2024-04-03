import { useState } from "react";
import { GetData } from "../components/PasswordData";

const PasswordNew = () => {
  const [site, setSite] = useState("");
  const [url, setUrl] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [notes, setNotes] = useState("");

  const handleClick = () => {
    // Save data to server
    fetch("http://127.0.0.1:5000/items", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Data from inputs
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
        GetData;
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div>
      <h1 className="font-Poppins font-bold text-text-default p-18">
        New Password
      </h1>
      <div className="flex flex-row justify-center">
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
            <input
              className="bg-transparent placeholder-text-800 text-center"
              placeholder="Site"
              value={site}
              onChange={(e) => setSite(e.target.value)}
            ></input>
          </div>
          <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center">
            <input
              className="bg-transparent placeholder-text-800 text-center"
              placeholder="URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            ></input>
          </div>
          <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center">
            <input
              className="bg-transparent placeholder-text-800 text-center"
              placeholder="User"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            ></input>
          </div>
          <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center">
            <input
              className="bg-transparent placeholder-text-800 text-center"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center">
            <input
              className="bg-transparent placeholder-text-800 text-center"
              placeholder="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="flex justify-end inset-x-0 bottom-0">
        {" "}
        {/* Bottom right button to save password */}
        <button
          className="bg-primary-default p-4 rounded-lg flex items-center gap-2"
          onClick={handleClick}
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
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span className="text-sm font-bold font-Poppins">Save</span>
        </button>
      </div>
    </div>
  );
};

export default PasswordNew;
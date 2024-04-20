import { useEffect, useState } from "react";

const AccountPage = () => {
  const [id, setId] = useState<string>("");
  const [newId, setNewId] = useState<string>("");

  const handleClick = () => {
    console.log("Save button clicked! ID: ", newId);
    localStorage.setItem("user", JSON.stringify(newId));
  };

  // if there is a user in local storage, set the id to the user
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setId(JSON.parse(localStorage.getItem("user") || ""));
    } else {
      setId("Enter ID here!");
    }
  });

  return (
    <div>
      <h1 className="font-Poppins font-bold p-18">Account Page</h1>
      <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center">
        <input
          className="bg-transparent placeholder-text-800 text-center"
          placeholder={id}
          value={newId}
          onChange={(e) => setNewId(e.target.value)}
        ></input>
      </div>
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
  );
};

export default AccountPage;

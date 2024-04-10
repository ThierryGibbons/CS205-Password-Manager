import { useEffect, useState } from "react";
import { usePasswords } from "../components/PasswordData";
import Generate from "../components/Generate";

const PasswordView = () => {
  const [hash, setHash] = useState("");
  const [edit, setEdit] = useState(false);

  const [id, setId] = useState(0);
  const [site, setSite] = useState("");
  const [url, setUrl] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [notes, setNotes] = useState("");

  // Get # path from URL
  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const { passwords, updatePassword, deletePassword } = usePasswords();

  // Convert #pwdView-Site to Site
  const currentSite = hash.replace("#pwdView-", "");

  const saveButton = () => {
    const passwordEntry = passwords.find((entry) => entry.site === currentSite);
    if (passwordEntry) {
      setId(passwordEntry.id);
    }

    try {
      // Toggle edit fields
      setEdit(false);
    } catch (error) {
      console.log(
        "Cannot set properties of null (reading 'readOnly')\n",
        error
      );
    }

    // Save data
    const updatedPassword = {
      id: id,
      site: site,
      url: url,
      user: user,
      password: password,
      notes: notes,
    };
    updatePassword(id, updatedPassword);
  };

  const deleteButton = () => {
    // Delete data from server
    deletePassword(currentSite);
  };

  return (
    <div>
      <h1 className="font-Poppins font-bold text-text-default p-18">
        Password View Page
      </h1>
      {passwords.map((entry, index) => {
        if (entry.site === currentSite) {
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
                  <input
                    id="site"
                    className="bg-transparent placeholder-text-200 text-center"
                    readOnly={!edit}
                    placeholder={entry.site}
                    value={site}
                    onChange={(e) => setSite(e.target.value)}
                  />
                </div>
                <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center">
                  <input
                    id="url"
                    className="bg-transparent placeholder-text-200 text-center"
                    readOnly={!edit}
                    placeholder={entry.url}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center">
                  <input
                    id="user"
                    className="bg-transparent placeholder-text-200 text-center"
                    readOnly={!edit}
                    placeholder={entry.user}
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
                <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center">
                  <input
                    id="password"
                    className="bg-transparent placeholder-text-200 text-center"
                    readOnly={!edit}
                    placeholder={entry.password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className=""
                    onClick={() => {
                      // Generate a random password
                      setEdit(true);
                      setPassword(Generate());
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </button>
                </div>
                <div className="font-Poppins font-bold bg-background-900 text-text-default p-3 m-2 rounded-lg w-[60vw] items-center">
                  <input
                    id="notes"
                    className="bg-transparent placeholder-text-200 text-center"
                    readOnly={!edit}
                    placeholder={entry.notes}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* Footer Buttons */}
      <div className="flex inset-x-0 bottom-0 w-[100vh]">
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

        {!edit ? (
          <button
            className="bg-primary-default p-4 rounded-lg flex items-center justify-end gap-2"
            onClick={() => setEdit(true)}
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
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
            <span className="text-sm font-bold font-Poppins">Edit</span>
          </button>
        ) : (
          <button
            className="bg-accent-default p-4 rounded-lg flex items-center justify-end gap-2"
            onClick={saveButton}
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
        )}
      </div>
    </div>
  );
};

export default PasswordView;

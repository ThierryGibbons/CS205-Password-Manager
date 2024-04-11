import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface PasswordEntry {
  id: number;
  site: string;
  url: string;
  user: string;
  password: string;
  notes: string;
}

interface PasswordContextType {
  passwords: PasswordEntry[];
  addPassword: (newPassword: PasswordEntry) => void;
  updatePassword: (id: number, newPassword: PasswordEntry) => void;
  deletePassword: (site: string) => void;
}

// Create Context
const PasswordContext = createContext<PasswordContextType>(
  {} as PasswordContextType
);

export function usePasswords() {
  return useContext(PasswordContext);
}

interface PasswordProviderProps {
  children: ReactNode;
}

export const PasswordProvider: React.FC<PasswordProviderProps> = ({
  children,
}) => {
  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);

  useEffect(() => {
    // Fetch passwords initially and set uo any other lofic needed
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
        localStorage.setItem("passwords", JSON.stringify(data.response));
        setPasswords(JSON.parse(localStorage.getItem("passwords") || "[]"));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  // Add Password
  const addPassword = (newPassword: PasswordEntry) => {
    const updatedPasswords = [...passwords, newPassword];
    setPasswords(updatedPasswords);

    // Update Local Storage & Backend
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));

    fetch("http://127.0.0.1:5000/items", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Data from inputs
        site: newPassword.site,
        url: newPassword.url,
        user: newPassword.user,
        password: newPassword.password,
        notes: newPassword.notes,
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
  };

  // Update Password
  const updatePassword = (id: number, newPassword: PasswordEntry) => {
    const updatedPasswords = passwords.map((password) =>
      password.id === id
        ? {
            ...password,
            site: newPassword.site || password.site,
            url: newPassword.url || password.url,
            user: newPassword.user || password.user,
            password: newPassword.password || password.password,
            notes: newPassword.notes || password.notes,
          }
        : password
    );
    setPasswords(updatedPasswords);

    // Update Local Storage & Backend
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
    // console.log("Updated Passwords: ", updatedPasswords);

    return fetch("http://127.0.0.1:5000/itemsU", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        site: newPassword.site,
        url: newPassword.url,
        user: newPassword.user,
        password: newPassword.password,
        notes: newPassword.notes,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        return "failed";
      });
  };

  // Delete Password
  const deletePassword = (site: string) => {
    const updatedPasswords = passwords.filter(
      (password) => password.site !== site
    );
    setPasswords(updatedPasswords);

    // Update Local Storage & Backend
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));

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

  // Update context values
  const value = {
    passwords,
    addPassword,
    updatePassword,
    deletePassword,
  };

  return (
    <PasswordContext.Provider value={value}>
      {children}
    </PasswordContext.Provider>
  );
};

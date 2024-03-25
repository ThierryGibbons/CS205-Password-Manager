import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import PasswordData from "../components/PasswordData";

// Pages
import PasswordPage from "./pages/password";
import AlertPage from "./pages/alert";
import AccountPage from "./pages/account";
import PasswordView from "./pages/passwordView";

interface PasswordEntry {
  site: string;
  url: string;
  user: string;
  password: string;
  notes: string;
}

function App() {
  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);

  useEffect(() => {
    setPasswords(JSON.parse(localStorage.getItem("passwords") || "[]"));
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar v="Password" />
              <PasswordPage />
            </>
          }
        />
        <Route
          path="/alert"
          element={
            <>
              <NavBar v="Alert" />
              <AlertPage />
            </>
          }
        />
        <Route
          path="/account"
          element={
            <>
              <NavBar v="Account" />
              <AccountPage />
            </>
          }
        />
        {passwords.map((entry, index) => (
          <Route
            key={index}
            path={`/pwdView-${entry.site}`}
            element={
              <>
                <NavBar v="Password" />
                <PasswordView />
              </>
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;

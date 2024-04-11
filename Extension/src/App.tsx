// import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import { usePasswords } from "./components/PasswordData";

// Pages
import PasswordPage from "./pages/password";
import AlertPage from "./pages/alert";
import AccountPage from "./pages/account";
import PasswordView from "./pages/passwordView";
import PasswordNew from "./pages/passwordNew";

function App() {
  const { passwords } = usePasswords();

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
        <Route
          path="/pwdCreate"
          element={
            <>
              <NavBar v="Password" />
              <PasswordNew />
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
        <Route
          path="*"
          element={
            <>
              <NavBar v="Password" />
              <h1 className="font-Poppins font-bold text-text-default p-18">
                Page not found.
              </h1>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";

// Pages
import PasswordPage from "./pages/password";
import AlertPage from "./pages/alert";
import AccountPage from "./pages/account";
import PasswordView from "./pages/passwordView";

function App() {
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
          path="/pwdView"
          element={
            <>
              <NavBar v="Password" />
              <PasswordView />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;

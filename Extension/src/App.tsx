import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";

// Pages
import PasswordPage from "./pages/password";
import AlertPage from "./pages/alert";
import AccountPage from "./pages/account";

function App() {
  return (
    <>
      {/* <NavBar v={path} /> */}
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
      </Routes>
    </>
  );
}

export default App;

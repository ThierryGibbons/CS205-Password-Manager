import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import { PasswordProvider } from "./components/PasswordData.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PasswordProvider>
      <Router>
        <div className="bg-background-default w-64 md:w-auto">
          <App />
        </div>
      </Router>
    </PasswordProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import WorkoutsContextProvider from "./context/WorkoutsContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

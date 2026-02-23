import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";
import JobProvider from "./context/JobContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <JobProvider>
        <App />
        <Toaster position="top-right" reverseOrder={false} />
      </JobProvider>
    </BrowserRouter>
  </StrictMode>
);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/routes.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
    <ToastContainer />
  </StrictMode>
);

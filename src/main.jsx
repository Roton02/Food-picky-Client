import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route";
import ContextProvider from "./ContextProvider/ContextProvider";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <RouterProvider
          fallbackElement={
            <div className="flex min-h-screen my-auto items-center justify-center">
              <span className="loading loading-bars loading-xs"></span>
              <span className="loading loading-bars loading-lg"></span>
              <span className="loading loading-bars loading-lg"></span>
              <span className="loading loading-bars loading-lg"></span>
            </div>
          }
          router={router}
        />
      </HelmetProvider>
    </ContextProvider>
    <ToastContainer />
  </React.StrictMode>
);

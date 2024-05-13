import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route";
import ContextProvider from "./ContextProvider/ContextProvider";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </HelmetProvider>
    </ContextProvider>
    <ToastContainer />
  </React.StrictMode>
);

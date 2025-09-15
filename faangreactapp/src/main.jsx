import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OurServices from "./OurServices.jsx";
import OurProducts from "./OurProducts.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/services",
        element: <OurServices></OurServices>,
      },
      {
        path: "/naistam",
        element: <OurProducts></OurProducts>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);

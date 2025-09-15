import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OurServices from "./OurServices.jsx";
import OurProducts from "./OurProducts.jsx";
import Trainings from "./Trainings.jsx";
import Ecom from "./Ecom.jsx";
import ProductDetails from "./ProductDetails.jsx";
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
        path: "/products",
        element: <OurProducts></OurProducts>,
      },
      {
        path: "/trainings",
        element: <Trainings></Trainings>,
      },
      {
        path: "/ecom",
        element: <Ecom></Ecom>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);

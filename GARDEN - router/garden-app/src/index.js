import React from "react";
//import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoriesPage from "../src/Pages/CategoriesPage/CategoriesPage";
import MainPage from "../src/Pages/MainPage/MainPage";
import SingleProductPage from "../src/Pages/SingleProductPage/SingleProductPage";
import "./index.css";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    //errorElement: <ErrorPage />,
    children: [
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/sales",
        element: <ProductsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/components/Home.jsx";
import Countries from "./assets/components/Countries.jsx";
import CountryDetails from "./assets/components/CountryDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Countries></Countries>,
        loader: () => fetch("https://restcountries.com/v3.1/all"),
      },
      {
        path: "/country/:countryId",
        element: <CountryDetails></CountryDetails>,
        loader: ({ params }) =>
          fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

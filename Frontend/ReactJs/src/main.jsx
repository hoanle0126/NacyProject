import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import { RouterProvider } from "react-router-dom";
import RouterComp from "./router/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={RouterComp}/>
  </React.StrictMode>
);

import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CustomComponent } from "./CustomComponent";
import { Counter } from "./Counter";
import BackGroundChanger from "./BackGroundChanger";
import MaterialUi from "./MaterialUi";
import PasswordGenerator from "./PasswordGenerator";
import InputBox from "./components/InputBox";
import CurrencyConverter from "./CurrencyConverter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Home } from "@mui/icons-material";
import HomePage from "./components/Home/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />}></Route>
      <Route path="bgchanger" element={<BackGroundChanger />}></Route>
      <Route path="counter" element={<Counter></Counter>}></Route>
      <Route path="password" element={<PasswordGenerator />}></Route>
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

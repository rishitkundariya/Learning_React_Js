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
import HomePage from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Search from "./components/Search/Search";
import UserContextProvider from "./context/UserContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />}></Route>
      <Route path="bgchanger" element={<BackGroundChanger />}></Route>
      <Route path="counter" element={<Counter></Counter>}></Route>
      <Route path="password" element={<PasswordGenerator />}></Route>
      <Route
        path="search/:searchparam/:secondParam"
        element={<Search />}
      ></Route>
      <Route path="dashboard" element={<Dashboard />}></Route>
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>
  </React.StrictMode>
);

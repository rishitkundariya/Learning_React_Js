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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CustomComponent/> */}
    {/* <Counter></Counter> */}
    {/* <MaterialUi></MaterialUi> */}
    {/* <BackGroundChanger></BackGroundChanger> */}
    {/* <PasswordGenerator></PasswordGenerator> */}
    <CurrencyConverter></CurrencyConverter>
  </React.StrictMode>
);

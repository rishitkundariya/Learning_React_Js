import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CustomComponent } from './CustomComponent';
import { Counter } from './Counter';
import BackGroundChanger from './BackGroundChanger';
import MaterialUi from './MaterialUi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CustomComponent/> */}
    {/* <Counter></Counter> */}
    {/* <MaterialUi></MaterialUi> */}
    <BackGroundChanger></BackGroundChanger>
  </React.StrictMode>
);


import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./index.css";
import Cart from "./pages/Cart";
import CheckOutStepOne from "./pages/CheckOutStepOne";
import CheckOutStepTwo from "./pages/CheckOutStepTwo";
import Finish from "./pages/Finish";
import Inventory from "./pages/Inventory";
import InventoryItem from "./pages/InventoryItem";
import Login from "./pages/Login";


import { InventoryData } from "./utils/InventoryData.js";
import { InventoryDataLong } from "./utils/InventoryDataLong.js";



const routing = (
  
    <Router>
       <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/inventory.html' element={<PrivateRoute component={(props) => <Inventory data={InventoryData} {...props} />} />} />
      <Route path='/inventory-long.html' element={<PrivateRoute component={(props) => <Inventory data={InventoryDataLong} {...props} />} />}
      />
      <Route path='/inventory-item.html'  element={<PrivateRoute component={InventoryItem} />}
      />
      <Route path='/cart.html' element={<Cart/>} />
      <Route
        path='/checkout-step-one.html'
        element={<PrivateRoute component={CheckOutStepOne} />}
        />
      <Route
        path='/checkout-step-two.html'
        element={<PrivateRoute component={CheckOutStepTwo} />}
      />

      <Route path='/checkout-complete.html' element={<PrivateRoute component={Finish} />}
      />
      </Routes>
    </Router>
 
);

//ReactDOM.render(routing, document.getElementById("root"));


const root = createRoot(document.getElementById("root"));
root.render(routing);

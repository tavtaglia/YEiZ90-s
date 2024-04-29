import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Layout from './pages/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Order from './pages/Order'
import Catalog from './pages/Catalog'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path = "/dashboard" element = {<Layout />}>
          <Route path="" element={<Dashboard />} />
        </Route>

        <Route path = "/dashboard" element = {<Layout />}>
          <Route path="" element={<Dashboard />} />
        </Route>

        <Route path = "/order" element = {<Layout />}>
        <Route path = "" element = {<Order/>}/>
        </Route>

        <Route path = "/catalog" element = {<Layout />}>
        <Route path = "" element = {<Catalog/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
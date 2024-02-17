import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Product1 from './pages/Products/Product1/Product1';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products">
        <Route path="/products/:id" element={<Product1 />}/>
      </Route>
      {/* <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} /> */}
    </Route>
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

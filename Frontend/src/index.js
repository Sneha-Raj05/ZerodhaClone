import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom" //ye 3 components h jo react-router dom hume provide karata hai
import './index.css';
import HomePage from './landing_page/Home/HomePage';
import SignUp from './landing_page/signup/SignUp';
import AboutPage from './landing_page/About/AboutPage';
import ProductPage from './landing_page/Products/ProductPage';
import PricingPage from './landing_page/Pricing/PricingPage';
import SupportPage from './landing_page/Support/SupportPage';
import Footer from "./landing_page/Footer";
import Navbar from "./landing_page/Navbar";
import NotFound from './landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path='/about' element={<AboutPage/>} /> 
    <Route path='/products' element={<ProductPage/>} />
    <Route path='/pricing' element={<PricingPage/>} />
    <Route path='/support' element={<SupportPage/>} />
    <Route path='*' element={<NotFound/>} /> 
  </Routes>
  <Footer/>
  </BrowserRouter>
);


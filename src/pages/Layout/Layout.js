import React, { useEffect } from "react";

import {Outlet } from 'react-router-dom';
import './Layout.css';
import Spinner from '../../sections/spinner';
import Topnav from '../../sections/topnav';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.sticky-top');
      if (window.scrollY > 300) {
        navbar.style.top = '0px';
      } else {
        navbar.style.top = '-100px';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Spinner></Spinner>
      <Topnav></Topnav>
      <Navbar></Navbar>
      <Outlet/>
      <Footer></Footer>
    </>
  );
}

export default App;

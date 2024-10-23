import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Fixed() {
  return (
    <div>
      <div className="top">
        <Navbar />
      </div> 
      <div className="bottom">
        <Outlet />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Fixed;

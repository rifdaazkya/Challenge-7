import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';

export default function Layout({children}) {
  return (
    <div>
      <Navbar />
        {children}
      <Footer />
    </div>
  )
};

import React from 'react';
import '../../App.css';
import './Pages.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Statements() {
  return (
    <div className='page-container'>
      <Navbar />
      <div className='content'>
      <h1 className='title'>STATEMENTS</h1>
      </div>
      <Footer />
    </div>
  )
}
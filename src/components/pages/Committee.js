import React from 'react';
import '../../App.css';
import './Pages.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Committee() {
  return (
    <div className='page-container'>
      <Navbar />
      <div className='content'>
        <h1 className='title'>MEMBERSHIP</h1>
        <p className='committee-text-1'>
          Our membership comprises university staff from across Scotland, with JSN members based at:
        </p>
        <p className='committee-text'>
          <br />University of St Andrews
          <br />University of Glasgow
          <br />University of Edinburgh
          <br />University of Aberdeen
          <br />University of West of Scotland
          <br />Edinburgh College
          <br />Strathclyde University
          <br />Heriot-Watt University
        </p>
        <p className='committee-text-1'>
          If you are interested in joining the JSN, please <a className='guidance-link' href="mailto:jewishstaffnetworkscotland@gmail.com">get in touch</a> – we'd love to hear from you!
        </p>
      </div>
      <Footer />
    </div>
  );
}

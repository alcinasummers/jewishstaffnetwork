import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Committee from './components/pages/Committee';
import Ethicalprinciples from './components/pages/Ethical_principles';
import Guidance from './components/pages/Guidance';
import HeroSection from './components/HeroSection';
import Cards from './components/pages/Cards';
import Statements from './components/pages/Statements';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div><HeroSection /><Cards /><Footer /></div>} />
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/ethical_principles" element={<Ethicalprinciples />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/statements" element={<Statements />} />
      </Routes>
    </>
  );
}

export default App;

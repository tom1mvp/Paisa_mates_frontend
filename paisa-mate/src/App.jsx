import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Footer from './components/Footer';


import Home from './pages/Home';
import Product from './pages/Products';


import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo/:category" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
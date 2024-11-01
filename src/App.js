// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import ProductList from './components/ProductList';
import ProtectedContent from './components/ProtectedContent';
import WalletConnect from './components/WalletConnect'; // Import WalletConnect component

const App = () => (
  <Router>
    <Header />
    <main>
      {/* Add WalletConnect button in a prominent place, e.g., header or main page */}
      <WalletConnect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;

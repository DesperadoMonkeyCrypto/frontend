import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import WalletConnect from './WalletConnect'; // Ensure this path is correct

const Header = () => (
  <header className="header">
    <div className="header-logo">PulseChain Merch Shop</div>
    <nav className="header-nav">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <WalletConnect /> {/* Add the WalletConnect component here */}
    </nav>
  </header>
);

export default Header;

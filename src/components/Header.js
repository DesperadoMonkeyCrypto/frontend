import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/images/hero-image.png'; // Adjust path as needed
import '../styles/Header.css';

function Header() {
    return (
        <header>
            <h1>PULSECHAIN MERCH SHOP</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;

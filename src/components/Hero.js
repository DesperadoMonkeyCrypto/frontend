import React from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/images/hero-image.png';

function Hero() {
    return (
        <div className="hero-container">
            <img src={heroImage} alt="NFT Merch Banner" className="hero-banner" />
            <h1>PulseChain NFT Merch Store</h1>
        </div>
    );
}

export default Hero;

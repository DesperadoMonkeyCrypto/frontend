// src/components/Banner.js
import React from 'react';
import '../styles/Banner.css';
import bannerImage from '../assets/images/hero-image.png';

const Banner = () => {
    return (
        <div className="banner-container">
            <img src={bannerImage} alt="Banner" className="banner-image" />
        </div>
    );
};

export default Banner;

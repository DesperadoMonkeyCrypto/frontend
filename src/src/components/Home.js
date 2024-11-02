// Home.js

import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to the NFT Merch Store</h1>
        <p>Explore our collection of NFTs and merch items!</p>
        <button className="shop-now-button">Shop Now</button>
      </section>
      {/* Add other home content here */}
    </div>
  );
};

export default Home;

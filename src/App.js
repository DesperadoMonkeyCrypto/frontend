import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';


const App = () => (
    <div>
        <Header />
        <main>
            <h1>Welcome to the NFT Merch Store</h1>
            <p>Explore our collection of NFTs and merch items!</p>
            <Products />
        </main>
        <Footer />
    </div>
);

export default App;


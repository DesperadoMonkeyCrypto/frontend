// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import WalletConnect from './components/WalletConnect';

const App = () => {
    const [walletAddress, setWalletAddress] = useState(null);
    const [products, setProducts] = useState([]);

    const handleWalletConnect = (address) => {
        setWalletAddress(address);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/printful/products`);
                const data = await response.json();
                setProducts(data.result);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Router>
            <Header />
            <WalletConnect onWalletConnect={handleWalletConnect} />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products products={products} />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;

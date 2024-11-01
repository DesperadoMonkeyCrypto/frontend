// src/components/Products.js
import React from 'react';
import ProductList from './ProductList';
import '../styles/Products.css'; // Import the CSS file for styling

const Products = () => (
  <div className="products-container">
    <h2>Our Products</h2>
    <ProductList />
  </div>
);

export default Products;

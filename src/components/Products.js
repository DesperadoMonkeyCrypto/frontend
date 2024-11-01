// frontend/src/components/Products.js

import React from 'react';
import ProductList from './ProductList'; // Ensure this path is correct

const Products = ({ products }) => (
    <div className="products-container">
        <h2>Our Products</h2>
        <ProductList products={products} />
    </div>
);

export default Products;

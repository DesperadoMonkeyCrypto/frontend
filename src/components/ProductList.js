// frontend/src/components/ProductList.js

import React from 'react';

const ProductList = ({ products }) => (
    <ul>
        {products && products.length > 0 ? (
            products.map((product) => (
                <li key={product.id}>{product.name}</li>
            ))
        ) : (
            <p>No products available.</p>
        )}
    </ul>
);

export default ProductList;

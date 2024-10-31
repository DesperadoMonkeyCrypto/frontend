import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null); // State to track errors

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/printful/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.result); // Assuming data structure has 'result'
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p> // Display error if exists
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;

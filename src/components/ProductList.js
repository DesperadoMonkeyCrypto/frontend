import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/printful/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.result); // Assuming `result` holds the product data
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Our Products</h2>
            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <img src={product.thumbnail_url} alt={product.name} width="100" />
                            <p>Variants: {product.variants}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;

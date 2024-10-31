import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/printful/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.result); // Adjust according to Printful's data structure
            } catch (err) {
                setError(err.message);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <img src={product.thumbnail_url} alt={product.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;

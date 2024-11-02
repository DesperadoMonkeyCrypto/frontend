// frontend/src/components/Products.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/printful/products`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <Link to={`/product/${product.id}`}>
                        <img src={product.thumbnail_url} alt={product.name} />
                        <h2>{product.name}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Products;

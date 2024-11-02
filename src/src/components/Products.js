import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/printful/products');
                const data = await response.json();
                setProducts(data.result); // Adjust based on your API response structure
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="products-container">
            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;

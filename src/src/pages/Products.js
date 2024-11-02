import React, { useEffect, useState } from 'react';
import { fetchPrintfulProducts } from '../services/printfulService';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchPrintfulProducts();
            setProducts(data);
        };
        getProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

export default Products;

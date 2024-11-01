import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/printful/products');
                setProducts(response.data.result);
            } catch (error) {
                setError('Failed to fetch products.');
            }
        };
        fetchProducts();
    }, []);

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Our Products</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            width: '200px',
                            padding: '10px',
                            textAlign: 'center',
                            cursor: 'pointer'
                        }}
                        onClick={() => openModal(product)}
                    >
                        <img
                            src={product.thumbnail_url}
                            alt={product.name}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px'
                            }}
                        />
                        <h2 style={{ fontSize: '1.1em', margin: '10px 0' }}>{product.name}</h2>
                        <p>Variants: {product.variants}</p>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onClick={closeModal}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            maxWidth: '500px',
                            width: '90%',
                            textAlign: 'center',
                            position: 'relative'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'none',
                                border: 'none',
                                fontSize: '1.2em',
                                cursor: 'pointer'
                            }}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedProduct.thumbnail_url}
                            alt={selectedProduct.name}
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                        <h2>{selectedProduct.name}</h2>
                        <p>Variants: {selectedProduct.variants}</p>
                        <p>Product ID: {selectedProduct.id}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;

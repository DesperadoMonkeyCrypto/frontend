import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductList.css';

const ProductList = ({ products }) => {
    return (
        <div className="product-grid">
            {products.map(product => (
                <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                    <div>
                        <img src={product.thumbnail_url} alt={product.name} className="product-image" />
                        <h3 className="product-title">{product.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductList;

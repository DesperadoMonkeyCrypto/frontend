import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <LazyLoadImage src={product.thumbnail_url} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.variants} variants available</p>
  </div>
);

export default ProductCard;

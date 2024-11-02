import React, { useEffect, useState } from 'react';
import { fetchPrintfulProducts } from '../services/printfulService';
import '../styles/ProductCarousel.css';
const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchPrintfulProducts();
      setProducts(products);
    };

    loadProducts();
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.thumbnail_url} alt={product.name} />
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductCarousel;

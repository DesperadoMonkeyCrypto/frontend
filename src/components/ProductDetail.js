// frontend/src/components/ProductDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState('');
    const [selectedVariantId, setSelectedVariantId] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/printful/products/${id}`);
                const data = await response.json();
                console.log('Product data:', data); // Debugging log for API response
                setProduct(data);
                setMainImage(data.sync_product.thumbnail_url); // Set initial main image
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product details:', error);
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    const handleVariantClick = (variantId, imageUrl) => {
        setMainImage(imageUrl);
        setSelectedVariantId(variantId);
    };

    return (
        <div className="product-detail">
            <h1>{product.sync_product.name}</h1>
            <img src={mainImage} alt={product.sync_product.name} className="main-product-image" />
            <div className="variants-section">
                <h2>Variants</h2>
                {product.sync_variants && Array.isArray(product.sync_variants) && product.sync_variants.length > 0 ? (
                    <div className="variant-grid">
                        {product.sync_variants.map((variant) => (
                            <div
                                key={variant.id}
                                className={`variant-card ${selectedVariantId === variant.id ? 'active' : ''}`}
                                onClick={() => handleVariantClick(variant.id, variant.files[0]?.preview_url || product.sync_product.thumbnail_url)}
                            >
                                <img
                                    src={variant.files[0]?.preview_url || product.sync_product.thumbnail_url}
                                    alt={variant.name}
                                    className="variant-image"
                                />
                                <p>{variant.name} - ${variant.retail_price}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No variants available.</p>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;

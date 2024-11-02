import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/ProductCard.css';

Modal.setAppElement('#root'); // Set the app element for accessibility

const ProductCard = ({ product }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <div className="product-card">
            <div onClick={openModal} className="product-card-image">
                <img src={product.thumbnail_url} alt={product.name} />
            </div>
            <h2>{product.name}</h2>
            <p>Variants: {product.variants}</p>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal} // Close when clicking outside the modal
                className="modal-content"
                overlayClassName="modal-overlay"
                shouldCloseOnOverlayClick={true} // Enable close on overlay click
            >
                <button className="modal-close-button" onClick={closeModal}>
                    &times;
                </button>
                <div className="modal-image">
                    <img src={product.thumbnail_url} alt={product.name} />
                </div>
                <h2>{product.name}</h2>
                <p>Variants: {product.variants}</p>
                <p>Product ID: {product.id}</p>
            </Modal>
        </div>
        
    );
};

export default ProductCard;

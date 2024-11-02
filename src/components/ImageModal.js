import React from 'react';
import '../styles/Modal.css'; // Corrected path for the styles folder

const ImageModal = ({ imageUrl, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content">
            <img src={imageUrl} alt="Zoomed View" />
        </div>
    </div>
);

export default ImageModal;

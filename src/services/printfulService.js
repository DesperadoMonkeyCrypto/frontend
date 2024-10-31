// frontend/src/services/printfulService.js
import axios from 'axios';

export const fetchProducts = async () => {
    try {
        const response = await axios.get('/api/printful/products');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        throw error;
    }
};

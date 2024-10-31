import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/printful/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

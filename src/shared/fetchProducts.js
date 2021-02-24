import axios from 'axios';

export const fetchProducts = async (url, query) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}${url}`, {
        params: query,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};
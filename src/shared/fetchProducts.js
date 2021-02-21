import axios from 'axios';

export const fetchProducts = async (url, query) => {
    const response = axios.get(`${process.env.REACT_APP_API_URL}${url}`);
    return response.data;
};
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import qs from 'querystring';
import { AppRoute } from '../../routing/AppRoute.enum';
import { fetchProducts } from '../../shared/fetchProducts';

export const Products = ({ location }) => {
    const query = qs.parse(location.search.substring(1));

    useEffect(() => {
        fetchProducts('/products', query);
    }, [query]);

    return (
        <>
            <h2>Products page</h2>
            <Link to={AppRoute.login}> Login </Link>
        </>
    );
};

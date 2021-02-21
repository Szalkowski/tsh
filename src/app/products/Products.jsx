import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../routing/AppRoute.enum';
import { fetchProducts } from '../../shared/fetchProducts';

export const Products = () => {

    useEffect(() => {
        fetchProducts('/products')
    },[])

    return (
        <>
            <h2>Products page</h2>
            <Link to={AppRoute.login}> Login </Link>
        </>
    );
};

import React, { useEffect, useState } from 'react';
import qs from 'querystring';
import { fetchProducts } from '../../shared/fetchProducts';
import { ItemBox } from '../../components/ItemBox';
import { NoItems } from '../../components/NoItems';

export const Products = ({ location }) => {
    const [items, setItems] = useState([]);
    const query = qs.parse(location.search.substring(1));

    useEffect(() => {
        getItems().then(resp => setItems(resp.items));
    }, [location.search]);
    const getItems = async () => await fetchProducts('/products', query);
    return (
        <>
            {(items && items.length > 0) ?
                items.map(item =>
                    <ItemBox key={item.id} item={item}/>
                ) :
                <NoItems/>
            }
        </>
    );
};

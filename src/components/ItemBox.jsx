import React from 'react';
import { Rating } from './Rating';

export function ItemBox({ item, openPopup }) {
    return (
        <div>
            <img src={item.image} alt={item.name}/>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <Rating rating={item.rating}/>
            <button onClick={() => openPopup(item)}>Show details</button>
        </div>
    );
}
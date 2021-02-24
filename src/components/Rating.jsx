import React from 'react';

export function Rating({ rating }) {
    const highestScore = 5;
    const indexes = [];
    for(let i = 1; i <= highestScore; i++) {
        indexes.push(i);
    }
    return (
        <div className="rating">
            {indexes.map(index => {
                if(rating > 0 && index <= rating) {
                    return <i className="icon iconstar-full"/>;
                } else {
                    return <i className="icon iconstar-empty"/>;
                }
            })}
        </div>
    );
}
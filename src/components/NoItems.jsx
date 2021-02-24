import React from 'react';

export function NoItems() {
    return (
        <div className="item-box">
            <img src={require('./../assets/images/task-list-plain.svg')}
                 alt="task-list-plain"
                 className="item-box__icon item-box__icon--plain"
            />
            <h2 className="item-box__header item-box__header--plain">Ooops... It's empty here</h2>
            <p className="item-box__description item-box__description--plain">There are no products on the list</p>
        </div>
    );
}
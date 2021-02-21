import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function Filters({ classname }) {
    const history = useHistory();

    const setFilters = e => {
        const params = new URLSearchParams(history.location.search);
        if(e.target.checked) {
            params.append(`${[e.target.name]}`, 'true');
        } else {
            params.delete(`${[e.target.name]}`);
        }
        history.push({ search: params.toString() });
    };
    return (
        <div className={`${classname ? classname + ' ' : ''}filters`}>
            <div className="filters__filter">
                <input type="checkbox"
                       id="active"
                       name="active"
                       onChange={setFilters}
                />
                <label htmlFor="active">Active</label>
            </div>
            <div className="filters__filter">
                <input type="checkbox"
                       id="promo"
                       name="promo"
                       onChange={setFilters}
                />
                <label htmlFor="promo">Promo</label>
            </div>
        </div>
    );
}
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Filters } from './Filters';

export function Search({ classname }) {
    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();
    const searchHandler = () => {
        const params = new URLSearchParams(history.location.search);
        if(params.has('search') && searchValue) {
            params.set('search', searchValue);
        } else if(searchValue) {
            params.append('search', searchValue);
        } else {
            params.delete('search');
        }
        history.push({ search: params.toString() });
    };

    return (
        <div className={`${classname ? classname + ' ' : ''}search`}>
            <div className="search__input">
                <input type="text"
                       name="search"
                       placeholder="Search"
                       value={searchValue}
                       onChange={e => setSearchValue(e.target.value)}
                />
                <button className="btn"
                        onClick={() => searchHandler()}
                >
                    <i className="icon iconsearch"/>
                </button>
            </div>
            <Filters classname="search__filters"/>
        </div>
    );
}
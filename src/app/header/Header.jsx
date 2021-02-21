import React from 'react';
import { AppRoute } from '../../routing/AppRoute.enum';
import { Link } from 'react-router-dom';

export function Header({ logged = false }) {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <h1 className="header__title">
                        <Link to={AppRoute.home}>join.tsh.io</Link>
                    </h1>
                    {logged ?
                        <img src={require('./../../assets/images/avatar.jpg')}
                             alt="avatar"
                             className="header__avatar"
                        /> :
                        <Link to={AppRoute.login} className="btn btn__transparent btn__transparent--blue">
                            Log in
                        </Link>
                    }
                    <div className="header__search search">
                        <div className="search__input">
                            <input type="text"
                                   placeholder="Search"
                            />
                            <button className="btn">
                                <i className="icon iconsearch"/>
                            </button>
                        </div>
                        <div className="filters search__filters">
                            <div className="filters__filter">
                                <input type="checkbox"
                                       id="active"
                                       name="active"
                                />
                                <label htmlFor="active">Active</label>
                            </div>
                            <div className="filters__filter">
                                <input type="checkbox"
                                       id="promo"
                                       name="promo"
                                />
                                <label htmlFor="promo">Promo</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
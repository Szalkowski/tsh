import React from 'react';
import { AppRoute } from '../routing/AppRoute.enum';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export function Header({ logged = false }) {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <h1 className="header__title">
                        <Link to={AppRoute.home}>join.tsh.io</Link>
                    </h1>
                    {logged ?
                        <img src={require('../assets/images/avatar.jpg')}
                             alt="avatar"
                             className="header__avatar"
                        /> :
                        <Link to={AppRoute.login} className="btn btn__transparent btn__transparent--blue">
                            Log in
                        </Link>
                    }
                    <Search classname="header__search"/>
                </div>
            </div>
        </header>
    );
}
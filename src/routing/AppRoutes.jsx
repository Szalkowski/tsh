import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Login } from '../app/login/Login';
import { Products } from '../app/products/Products';
import { Header } from '../components/Header';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
    return (
        <>
            <Header/>
            <Switch>
                <Route path={AppRoute.home} exact component={Products}/>
                <Route path={AppRoute.login} component={Login}/>

                <Redirect to={AppRoute.home}/>
            </Switch>
        </>
    );
};

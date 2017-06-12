import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const UnsecuredRoute = ({ component: Component, props: cProps, ...rest }) => (
    sessionStorage.getItem('JWT')
    ?<Redirect to="/" />
    :<Route {...rest} render={ props => <Component {...props} {...cProps} /> } />
);

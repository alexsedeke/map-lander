import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const SecuredRoute = ({ component: Component, props: cProps, ...rest }) => (
    sessionStorage.getItem('JWT')
    ?<Route {...rest} render={ props => <Component {...props} {...cProps} /> } />
    :<Redirect to="/login" />
);

export const IsSecured = (props) => {
    if (sessionStorage.getItem('JWT')) {
        return (props.children);
    }

    return null;
}

export const IsUnsecured = (props) => {
    if (!sessionStorage.getItem('JWT')) {
        return (props.children);
    }

    return null;
}

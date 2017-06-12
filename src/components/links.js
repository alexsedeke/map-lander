import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    IsSecured,
    IsUnsecured
} from './securedRoute';

const Links = () =>
    <nav>
        <Link to="/" className="brand">zero</Link>
        <IsSecured>
            <Link to="/logout">Logout</Link>
        </IsSecured>
        <IsUnsecured>
            <Link to="/login">Login</Link>
        </IsUnsecured>
        <Link to="/shops">Shops</Link>
        <Link to="/maillist">Maillist</Link>
    </nav>

export { Links };

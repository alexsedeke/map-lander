import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    IsSecured,
    IsUnsecured
} from './securedRoute';

import '../css/Header.css';
import '../css/Navbar.css';

const Links = () =>
    <header id="header">
        <nav className="navbar">
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
    </header>

export { Links };

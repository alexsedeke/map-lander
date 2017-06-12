import React from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
    componentDidMount() {
        sessionStorage.removeItem('JWT');
    }

    render() {
        return (
            <Redirect to="/login" />
        )
    }
}

export  { Logout };

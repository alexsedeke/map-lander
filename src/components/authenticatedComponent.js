import React from 'react';
import {
    withRouter
} from 'react-router';

export function requireAuth( Component ) {

    class AuthenticatedComponent extends React.Component {
        state = {
            isLoggedIn = true;
        }
        componentWillMount() {
            //this.setState({isLoggedIn: sessionStorage.getItem('JWT')});
        }
        render() {
            return this.state.isLoggedIn
            ? < Component { ...this.props } />
            : null;
        }
    }

    return withRouter( AuthenticatedComponent );
}

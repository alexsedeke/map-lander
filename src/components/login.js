import React from 'react';
import { Redirect } from 'react-router-dom';
import config from '../config';
import { validateEmail } from '../lib/validations';
import { login } from '../lib/accountService';

class Login extends React.Component {
    state = {
        email: 'test7@web.de',
        password: '3Sem8Tam',
        validEmail: true,
        enableLogin: false,
        fireRedirect: false,
        error: ''
    }

    setEmail = (evt) => {
        this.setState({
            email: evt.target.value
        });

        validateEmail(evt.target.value).then(result => {
            this.setState({
                validEmail: (result.valid === true)
            });
        });

        this.validateLoginButton();
    }

    setPassword = (evt) => {
        this.setState({
            password: evt.target.value
        });

        this.validateLoginButton();
    }

    validateLoginButton() {
        this.setState({
            enableLogin: ( this.state.validEmail && this.state.password.length > (config.validate.password.minLength - 2) )
        });
    }

    handleLogin = (evt) => {
        evt.preventDefault();
        login(this.state.email, this.state.password)
        .then( data => {
            this.setState({error: 'Success'});
            sessionStorage.setItem('JWT', data.JWT);
            this.setState({ fireRedirect: true });
        })
        .catch( error => this.setState({error: 'Wrong credentials'}) );
    }

    render() {
        const { from } = this.props.location.state || '/';
        const { fireRedirect } = this.state;

        return (
            <div className="loginBox">
                <h1>Login</h1>
                <form onSubmit={this.handleLogin}>
                    <input type="text" onChange={this.setEmail} value={this.state.email} /><br />
                    <input type="password" onChange={this.setPassword} value={this.state.password} /><br />
                    <button disabled={!this.state.enableLogin}>Login</button>
                </form>
                <p>{this.state.error}</p>
                {fireRedirect && (
                  <Redirect to={from}/>
                )}
            </div>
        )
    }
}

export { Login };

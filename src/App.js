import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';
import { Links } from './components/links';
import { Home } from './components/home';
import { Login } from './components/login';
import { Logout } from './components/logout';
import { Test } from './components/test';
import { SecuredRoute } from './components/securedRoute';
import { UnsecuredRoute } from './components/unsecuredRoute';

class App extends Component {
    state = {
        user: {}
    }
  render() {
    return (
        <Router>
            <div>
                <Links />
                <Switch>
                    <Route exact path="/" component={Home}  />
                    <SecuredRoute exact path="/test" component={Test} props={this.state} />
                    <SecuredRoute exact path="/logout" component={Logout} />
                    <UnsecuredRoute exact path="/login" component={Login} />
                    <Route exact path="/shops" render={() => <h1>Shops</h1>} />
                    <Route exact path="/maillist" render={() => <h1>Maillist</h1>}  />
                    <Route render={() => <h1>Page not found</h1>} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.js';
import Wizard from './components/wizard/Wizard.js';
import Login from './components/auth/Login.js';
import Logout from './components/auth/Logout.js';
import Register from './components/auth/Register.js'

export default () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/wizard" component={Wizard} />
    <Route path="/api/login" component={Login} />
    <Route path="/api/logout" component={Logout} />
    <Route path="/api/register" component={Register} />
  </Switch>
);

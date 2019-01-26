import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.js';
import Wizard from './components/wizard/Wizard.js';
import Login from './components/auth/Login.js';

export default () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/wizard" component={Wizard} />
    <Route path="/api/login" component={Login} />
  </Switch>
);

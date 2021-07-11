/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Detail from './Pages/Detail';
import Home from './Pages/Home';

export default function Navigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

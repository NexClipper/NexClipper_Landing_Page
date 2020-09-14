import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Whatwe from '../components/Whatwe';
import Product from '../components/Product';
import Content from '../components/Content';
import Nav from '../components/Nav';
import Manual from '../components/Manual';

export default () => (
  <Router>
    <Switch>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Whatwe} />
      <Route exact path="/" component={Product} />
      <Route exact path="/" component={Manual} />
      <Route exact path="/" component={Content} />
    </Switch>
  </Router>
);

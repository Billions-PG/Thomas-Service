import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Router, Switch } from 'react-router-dom';
import App from './components/App.jsx';

ReactDOM.render(

<HashRouter>
  <Switch>
    <Route path="/product/:id" component={App} />
  </Switch>
</HashRouter>

  , document.getElementById('recommended'),
);

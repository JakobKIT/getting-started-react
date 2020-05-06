import React from 'react';
import { Switch, HashRouter } from 'react-router-dom';
import { Route } from 'react-router';
import TodoPage from './components/Todo';

export function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' component={TodoPage} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;

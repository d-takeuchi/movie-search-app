import React, { VFC, memo } from 'react';

import { Route, Switch } from 'react-router-dom';
import MovieList from '../components/pages/MovieList';
import Page404 from '../components/pages/Page404';

const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <MovieList />
      </Route>

      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});

export default Router;

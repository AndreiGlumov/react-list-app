import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {publicRoutes, privateRoutes} from '../router/routes';

const AppRouter = () => {
  const isAuth = false;
  return (
    isAuth
      ?
      <Switch>
        {privateRoutes.map(route =>
          <Route component={route.component} path={route.path} exact={route.exact} />
        )}
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route component={route.component} path={route.path} exact={route.exact} />
        )}
        <Redirect to="/login" />
      </Switch>
  )
    ;
};

export default AppRouter;
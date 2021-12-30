import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthorizedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (JSON.parse(sessionStorage.getItem('userData'))) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default AuthorizedRoute;

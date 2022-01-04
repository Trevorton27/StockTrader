import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthorizedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (JSON.parse(localStorage.getItem('userData'))) {
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

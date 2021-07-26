import React from "react";
import { Redirect, Route } from "react-router-dom";
import { store } from '../redux/store';

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = true;

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;
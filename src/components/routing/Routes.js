import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";

import NotFound from "../layout/NotFound";
import PrivateRoute from "../routing/PrivateRoute";

const Routes = () => {
  return (
    <Fragment>
      <Alert />
      <section className="container">
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </section>
    </Fragment>
  );
};

export default Routes;

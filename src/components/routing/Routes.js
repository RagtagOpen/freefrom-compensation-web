import React, { Fragment } from "react"
import { Route, Switch } from "react-router-dom"

// Components
import Login from "../auth/Login"
import TermsAndConditions from "../layout/TermsAndConditions"
import Alert from "../layout/Alert"
import Dashboard from "../dashboard/Dashboard"

import NotFound from "../layout/NotFound"
import PrivateRoute from "../routing/PrivateRoute"

const Routes = () => {
  return (
    <Fragment>
      <Alert />
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default Routes

import React, { Fragment } from "react"
import { Route, Switch } from "react-router-dom"

// Components
import Login from "../auth/Login"
import TermsAndConditions from "../layout/TermsAndConditions/index"
import Alert from "../layout/Alert"
import Dashboard from "../dashboard/Dashboard"
import Mindset from "../mindset"
import Mindsets from "../mindsets"

import NotFound from "../layout/NotFound"
import PrivateRoute from "../routing/PrivateRoute"

const Routes = () => {
  return (
    <Fragment>
      <Alert />
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/mindsets" component={Mindsets} />
          <Route exact path="/mindsets/:mindsetId" component={Mindset} />
          <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default Routes

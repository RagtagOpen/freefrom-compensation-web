import React, { Fragment } from "react"
import { Route, Switch } from "react-router-dom"

// Layout
import { Alert } from "components/layout"

// Components
import Login from "components/auth/Login"
import TermsAndConditions from "components/pages/TermsAndConditions"
import Quiz from "components/pages/quiz"
import Dashboard from "components/dashboard/Dashboard"
import Disclaimer from "components/pages/Disclaimer"
import NotFound from "components/pages/NotFound"
import PrivateRoute from "components/routing/PrivateRoute"

const Routes = () => {
  return (
    <Fragment>
      <Alert />
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/terms-and-conditions"
            component={TermsAndConditions}
          />
          <Route exact path="/quiz" component={Quiz} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/disclaimer" component={Disclaimer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default Routes

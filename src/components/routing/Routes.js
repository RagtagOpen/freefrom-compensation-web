import React, { Fragment } from "react"
import { Route, Switch, Redirect } from "react-router-dom"

// Layout
import { Alert } from "components/layout"

// Components
import Login from "components/auth/Login"
import TermsAndConditions from "components/pages/TermsAndConditions"
import Quiz from "components/pages/Quiz"
import CompensationOption from "components/pages/CompensationOption/index"
import Dashboard from "components/dashboard/Dashboard"
import Disclaimer from "components/pages/Disclaimer"
import NotFound from "components/pages/NotFound"
import PrivateRoute from "components/routing/PrivateRoute"
import { Mindset, Mindsets } from "components/pages/Mindset"

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
          <Route
            exact
            path="/quiz"
            render={() => <Redirect to="/quiz/question/1" />}
          />
          <Route exact path="/quiz/question/:id" component={Quiz} />
          <Route
            exact
            path="/compensations/:slug/:state/:section"
            component={CompensationOption}
          />
          <Route exact path="/mindsets" component={Mindsets} />
          <Route exact path="/mindsets/:mindsetSlug" component={Mindset} />
          <Route
            exact
            path="/mindsets/:mindsetSlug/:state"
            component={Mindset}
          />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/disclaimer" component={Disclaimer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default Routes

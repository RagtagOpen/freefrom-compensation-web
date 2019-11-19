import React, { Fragment } from "react"
import { Route, Switch, Redirect } from "react-router-dom"

// Layout
import { Alert } from "components/layout"

// Components
import Login from "components/auth/Login"
import TermsAndConditions from "components/pages/TermsAndConditions"
import PrivacyPolicy from "components/pages/PrivacyPolicy"
import Quiz from "components/pages/Quiz"
import CompensationOption from "components/pages/CompensationOption/index"
import Dashboard from "components/dashboard/Dashboard"
import Disclaimer from "components/pages/Disclaimer"
import NextSteps from "components/pages/NextSteps"
import NotFound from "components/pages/NotFound"
import { Mindset, Mindsets } from "components/pages/Mindset"
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
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/disclaimer" component={Disclaimer} />
          <Route
            exact
            path="/questions"
            render={() => <Redirect to="/questions/1" />}
          />
          <Route exact path="/questions/:id" component={Quiz} />
          <Route exact path="/mindsets" component={Mindsets} />
          <Route exact path="/mindsets/:mindsetSlug" component={Mindset} />
          <Route
            exact
            path="/mindsets/:mindsetSlug/:state"
            component={Mindset}
          />
          <Route
            exact
            path="/compensations/:slug/:state/"
            render={({ match }) => (
              <Redirect
                to={`/compensations/${match.params.slug}/${match.params.state}/the-details`}
              />
            )}
          />
          <Route
            exact
            path="/compensations/:slug/:state/:section"
            component={CompensationOption}
          />
          <Route exact path="/next-steps" component={NextSteps} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default Routes

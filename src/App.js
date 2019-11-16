import React, { Fragment, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Routes from "components/routing/Routes"

// Redux
import { Provider } from "react-redux"
import store from "store"
import { loadUser } from "actions/authActions"
import setAuthToken from "utils/setAuthToken"

// Components
import { Navbar, Footer } from "components/layout"
import Home from "components/pages/Home"

// TODO: We should move the inline style out and import MaterialUI makeStyles

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div style={{ flex: 1 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={Routes} />
            </Switch>
          </div>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App

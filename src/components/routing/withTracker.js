import React, { useEffect } from "react"
import ReactGA from "react-ga"
import Cookies from "js-cookie"

if (Cookies.get("c") !== undefined) {
  ReactGA.initialize(process.env.REACT_APP_GA_UA)
}

const withTracker = (WrappedComponent, options = {}) => {
  if (Cookies.get("c") !== undefined) {
    // Cookie exists, lets boogie
    const trackPage = page => {
      ReactGA.set({
        page,
        ...options,
      })
      ReactGA.pageview(page)
    }

    const HOC = props => {
      useEffect(() => trackPage(props.location.pathname), [
        props.location.pathname,
      ])

      return <WrappedComponent {...props} />
    }

    return HOC
  }

  return WrappedComponent
}

export default withTracker

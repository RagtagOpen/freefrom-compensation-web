import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

// Components
import { Spinner } from "components/layout"
import DashboardActions from "components/dashboard/DashboardActions"

// Redux
import { getCurrentUser } from "actions/userActions"

// Material UI
import { Typography, Container } from "@material-ui/core"

const Dashboard = ({
  getCurrentUser,
  auth: { jwt },
  user: { user, loading },
}) => {
  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser])

  return loading && user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Container maxWidth="lg">
        <Typography variant="h1">Dashboard</Typography>
        <Typography variant="body1">
          Welcome, {user && user.username}
        </Typography>
        {user !== null ? (
          <Fragment>
            <DashboardActions />
          </Fragment>
        ) : null}
      </Container>
    </Fragment>
  )
}

Dashboard.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
})

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(Dashboard)

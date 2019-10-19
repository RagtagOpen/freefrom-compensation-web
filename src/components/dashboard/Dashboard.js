import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Components
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";

// Redux
import { getCurrentUser } from "../../actions/userActions";

const Dashboard = ({
  getCurrentUser,
  auth: { jwt },
  user: { user, loading }
}) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return loading && user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome, {user && user.username}
      </p>
      <div>
        <h1>Welcome</h1>
      </div>
      {user !== null ? (
        <Fragment>
          <DashboardActions />
        </Fragment>
      ) : null}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(Dashboard);

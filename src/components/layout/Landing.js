import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material
import Typography from "@material-ui/core/Typography"
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="container">
      <div className="dark-overlay">
        <div className="landing-inner">
          <Typography variant="h1">Compensation Compass</Typography >
          <p>As a survivor of domestic violence, you could be eligible for money to cover some of the costs of the harm you experienced. This tool is designed to help you understand your options and how to pursue them. But first, answer a few short questions to better understand your priorities as you decide what type of compensation is best for you.</p>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);

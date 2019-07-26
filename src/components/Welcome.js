import React, { Component } from "react"

import { connect } from "react-redux"

const mapStateToProps = ({ hasAcknowledged }) => {
  return { hasAcknowledged }
}

const mapDispatchToProps = dispatch => {
  return {
    acknowledge: bool => dispatch({ type: `UPDATE ACKNOWLEDGEMENT` }),
  }
}

class Welcome extends Component {
  state = {}
  render() {
    return (
      <div style={{ margin: "1rem", padding: "1rem" }}>
        <h2>Welcome to the new FreeFrom Quiz.</h2>
        <div>
          <label htmlFor="Acknowledgement checkbox">
            <input type="checkbox" onChange={this.props.acknowledge} />
          </label>
          <span>
            By checking this box, you acknowledge that you have read and agree
            to the terms and conditions provided.
          </span>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome)

import React, { Component } from "react"
import { connect } from "react-redux"
import Typography from '@material-ui/core/Typography';

const mapStateToProps = ({ hasAcknowledged }) => {
  return { hasAcknowledged }
}

const mapDispatchToProps = dispatch => {
  return {
    acknowledge: bool => dispatch({ type: `UPDATE ACKNOWLEDGEMENT` }),
  }
}

export class Welcome extends Component {
  state = {}
  render() {
    return (
      <div style={{ margin: "1rem", padding: "1rem" }}>
        <Typography variant="h3">What is Your Compensation Type?</Typography>
        <div>
          <label htmlFor="Acknowledgement checkbox">
            <input type="checkbox" onChange={this.props.acknowledge} />
          </label>
          <span>
            By checking this box, you acknowledge that you have read and agree to the terms and conditions provided.
          </span>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)

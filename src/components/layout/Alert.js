import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

// Material UI
import { Snackbar, Typography } from "@material-ui/core"

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id}>
      <Snackbar
        open={true}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={
          <Typography id="message-id" variant="subtitle1">
            {alert.message}
          </Typography>
        }
      />
    </div>
  ))

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  alerts: state.alert,
})

export default connect(mapStateToProps)(Alert)

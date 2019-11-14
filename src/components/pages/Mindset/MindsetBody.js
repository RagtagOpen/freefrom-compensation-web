import React, { Fragment } from "react"
import PropTypes from "prop-types"

// Material UI
import Typography from "@material-ui/core/Typography"

const MindsetBody = ({ mindset }) => {
  return (
    <Fragment>
      <Typography variant="h1" gutterBottom={true}>
        Your Compensation Mindset
      </Typography>
      <Typography variant="h2" align="center" gutterBottom={true}>
        {mindset.name}
      </Typography>
      {mindset.description.map(graf => (
        <Typography variant="body1" paragraph={true}>
          {graf}
        </Typography>
      ))}
    </Fragment>
  )
}

MindsetBody.propTypes = {
  mindset: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
}

export default MindsetBody

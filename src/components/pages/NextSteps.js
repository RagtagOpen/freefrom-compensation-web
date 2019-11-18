import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

// Material UI
import { Container, Typography } from "@material-ui/core"

// Components
import { Title } from "components/layout"

const NextSteps = () => {
  return (
    <Container maxWidth="md">
      <Title />
      <Typography variant="body1">Next Steps</Typography>
    </Container>
  )
}

NextSteps.propTypes = {}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  {}
)(NextSteps)

import React from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom";

// Material UI
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
} from "@material-ui/core"

// Helpers
import { CODES_TO_STATES } from 'utils/helpers'

// Components
import { Title } from "components/layout"

const CompensationOption = ({}) => {
  const { state, slug } = useParams();

  return(
    <Container maxWidth="md">
      <Title />
      <Typography variant={"h2"}>For {CODES_TO_STATES[state]} Residents</Typography>
    </Container>
  )
}

const mapStateToProps = () => ({
})

export default connect(
  mapStateToProps,
  {}
)(CompensationOption)

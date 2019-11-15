import React from "react"
import { connect } from "react-redux"

// Material UI
import {
  Box,
  Button,
  Container,
  Grid,
} from "@material-ui/core"

// Components
import { Title } from "components/layout"

const CompensationOption = ({}) => {
  return(
    <Container maxWidth="md">
      <Title />
    </Container>
  )
}

const mapStateToProps = () => ({
})

export default connect(
  mapStateToProps,
  {}
)(CompensationOption)

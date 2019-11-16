import React, { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"

// Material UI
import {
  Box,
  Button,
  Container,
  Typography,
  CardMedia,
  Link,
  makeStyles,
} from "@material-ui/core"

// Data
import states from 'data/states'

// Redux
import {
  fetchResourceForState,
} from "actions/resourceActions"

// Components
import TheDetails from "./TheDetails"
import List from "./List"
import { Title } from "components/layout"
import Image from "images/resources/victims-of-crime-act.png"

const useStyles = makeStyles(theme => ({
  image: {
    width: 264,
  },
}))

const CompensationOption = ({ fetchResourceForState, resource }) => {
  const { section, state: stateCode, slug } = useParams()
  const classes = useStyles()

  useEffect(() => {
    const stateResource = resource && resource[stateCode] && resource[stateCode][slug]

    if (stateResource === null) {
      fetchResourceForState(slug, stateCode)
    }
  }, [fetchResourceForState])

  // TODO: loading

  // const sections = [
  //   "The Details",
  //   "The Challenges",
  //   "How to Apply",
  //   "What to Expect After You Apply",
  //   "What if I don't Agree with the Judge's Decision?",
  //   "Resources",
  // ]

  // const renderContent = () => {
  //   const sectionInt = parseInt(currentSection);
  //   if(sectionInt == 1) {
  //     return <TheDetails />
  //   }

  //   if(sectionInt <= 6) {
  //     return <List />
  //   }

  //   return null;
  // }

  const stateName = states.find(state => {
    return state.id === stateCode
  }).name

  return (
    <Container maxWidth="md">
      <Title />
      <Typography variant={"h2"}>
        For {stateName} Residents
      </Typography>

    </Container>
  )
}

const mapStateToProps = state => ({
  resource: state.resource,
})

export default connect(
  mapStateToProps,
  { fetchResourceForState }
)(CompensationOption)

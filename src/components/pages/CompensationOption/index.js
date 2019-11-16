import React, { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"

// Material UI
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  CardMedia,
  Link,
  makeStyles,
} from "@material-ui/core"

// Data
import states from "data/states"

// Redux
import {
  fetchResourceForState,
  fetchResourceCategories,
} from "actions/resourceActions"

// Components
import TheDetails from "./TheDetails"
import TheChallenges from "./TheChallenges"
import HowToApply from "./HowToApply"
import WhatToExpect from "./WhatToExpect"
import WhatIfIDontAgree from "./WhatIfIDontAgree"
import Resources from "./Resources"
import { Title } from "components/layout"

const useStyles = makeStyles(theme => ({
  image: {
    width: 264,
  },
  categoryTitle: {
    marginBottom: 25,
  }
}))

const CompensationOption = ({ fetchResourceForState, fetchResourceCategories, resource }) => {
  const { section, state: stateCode, slug } = useParams()
  const classes = useStyles()

  const stateResource =
    resource.states[stateCode] && resource.states[stateCode][slug]

  if (!stateResource) {
    fetchResourceForState(slug, stateCode)
  }

  if (resource.categories.length === 0) {
    fetchResourceCategories()
  }

  const renderContent = () => {
    switch (section) {
      case "the-details":
        return <TheDetails resource={stateResource} />
      case "the-challenges":
        return <TheChallenges resource={stateResource} />
      case "how-to-apply":
        return <HowToApply resource={stateResource} />
      case "what-to-expect":
        return <WhatToExpect resource={stateResource} />
      case "what-if-i-dont-agree":
        return <WhatIfIDontAgree resource={stateResource} />
      case "resources":
        return <Resources resource={stateResource} />
      default:
        return null
    }
  }

  const stateName = states.find(state => {
    return state.id === stateCode
  }).name

  var resourceCategory;
  if (stateResource){
    resourceCategory = resource.categories.find(category => {
      return category.id === stateResource.resource_category_id
    })
  }

  return (
    <Container maxWidth="md">
      <Title />
      <Typography variant="h2">For {stateName} Residents</Typography>
      {stateResource && resourceCategory ? (
        <>
          <Box mb={2}>
            <Grid container justify="center" alignItems="center">
              <img className={classes.image} src={stateResource.image} />
            </Grid>
          </Box>
          <Typography
            className={classes.titleUppercase}
            variant="h2"
            align="center"
            gutterBottom={true}
            className={classes.categoryTitle}
          >
            {resourceCategory.name}
          </Typography>
          {renderContent()}
        </>
      ) : (
        <p>LOADING</p>
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  resource: state.resource,
})

export default connect(
  mapStateToProps,
  { fetchResourceForState, fetchResourceCategories }
)(CompensationOption)

import React, { useEffect } from "react"
import { connect } from "react-redux"
import { useParams, Redirect } from "react-router-dom"

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
import { Title } from "components/layout"
import TheDetails from "components/pages/CompensationOption/TheDetails"
import TheChallenges from "components/pages/CompensationOption/TheChallenges"
import HowToApply from "components/pages/CompensationOption/HowToApply"
import WhatToExpect from "components/pages/CompensationOption/WhatToExpect"
import WhatIfIDontAgree from "components/pages/CompensationOption/WhatIfIDontAgree"
import Resources from "components/pages/CompensationOption/Resources"
import Footer from "components/pages/CompensationOption/Footer"
import { Spinner } from "components/layout"

const useStyles = makeStyles(theme => ({
  image: {
    width: 264,
    maxWidth: 175,
  },
  categoryTitle: {
    marginBottom: 25,
  },
  titleUppercase: {
    textTransform: "uppercase",
  },
}))

const CompensationOption = ({
  fetchResourceForState,
  fetchResourceCategories,
  resource,
  quiz,
}) => {
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
        return <Redirect to="/404" />
    }
  }

  const stateName = states.find(state => {
    return state.id === stateCode
  }).name

  let resourceCategory
  if (stateResource) {
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
          <Box mb={2} mt={3}>
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
          <Footer
            resource={stateResource}
            category={resourceCategory.slug}
            state={stateCode}
            quiz={quiz}
            slug={slug}
            currentSection={section}
          />
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  resource: state.resource,
  quiz: state.quiz,
})

export default connect(
  mapStateToProps,
  { fetchResourceForState, fetchResourceCategories }
)(CompensationOption)

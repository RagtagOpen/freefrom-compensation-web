import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

// Components
import { Spinner } from "components/layout"
import {
  MindsetBody,
  FollowUp,
  ResultsNote,
  NextActions,
  ReadMore,
} from "components/pages/Mindset"

// Redux
import { loadMindsets } from "actions/mindsetActions"
import {
  fetchFeatureResource,
  fetchResourceCategories,
} from "actions/resourceActions"

// Material UI
import { Typography, Container } from "@material-ui/core"

const Mindset = ({
  fetchFeatureResource,
  fetchResourceCategories,
  loadMindsets,
  mindset,
  resource,
  quiz,
}) => {
  const { loading, error, all } = mindset
  const { location, completed } = quiz

  useEffect(() => {
    // Load our mindsets if we don't have them yet
    if (!mindset.loaded) {
      loadMindsets()
    }

    if (resource.feature === null && completed) {
      fetchFeatureResource(quiz.mindset.id, location)
    }

    if (resource.categories.length === 0) {
      fetchResourceCategories()
    }
  }, [loadMindsets, fetchFeatureResource, fetchResourceCategories])

  if (!quiz.agreement || !quiz.cookies) {
    return <Redirect to="/" />
  }

  if (loading) {
    return <Spinner />
  } else if (error) {
    return (
      <Container maxWidth="md">
        <Typography variant="h1">Your Compensation Mindset</Typography>
        <Typography variant="body1">
          There was a problem loading your results! Try again?
        </Typography>
      </Container>
    )
  } else {
    const current = all.filter(mindset => mindset.id === quiz.mindset.id)[0]

    return (
      <Container maxWidth="md">
        <MindsetBody mindset={current} />
        {resource.feature !== null && (
          <ReadMore featureResource={resource.feature} quiz={quiz} />
        )}
        <FollowUp />
        {resource.feature !== null && resource.categories.length > 0 && (
          <ResultsNote resource={resource} quiz={quiz} />
        )}
        <NextActions />
      </Container>
    )
  }
}

Mindset.propTypes = {
  loadMindsets: PropTypes.func.isRequired,
  mindset: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  resource: state.resource,
  mindset: state.mindset,
  quiz: state.quiz,
})

export default connect(
  mapStateToProps,
  { loadMindsets, fetchFeatureResource, fetchResourceCategories }
)(Mindset)

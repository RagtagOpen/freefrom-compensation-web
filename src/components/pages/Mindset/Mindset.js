import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"

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
import { fetchFeatureResource } from "actions/resourceActions"

// Material UI
import { Typography, Container } from "@material-ui/core"

const Mindset = ({
  fetchFeatureResource,
  loadMindsets,
  mindset,
  resource,
  match,
}) => {
  const { loading, error, all } = mindset

  useEffect(() => {
    // Load our mindsets if we don't have them yet
    if (!mindset.loaded) {
      loadMindsets()
    }

    if (resource.feature === null) {
      fetchFeatureResource()
    }
  }, [loadMindsets, fetchFeatureResource])

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
    const current = all.filter(
      mindset => mindset.slug === match.params.mindsetSlug
    )[0]

    return (
      <Container maxWidth="md">
        <MindsetBody mindset={current} />
        <ReadMore mindset={resource.feature} />
        <FollowUp />
        <ResultsNote />
        <NextActions />
      </Container>
    )
  }
}

Mindset.propTypes = {
  loadMindsets: PropTypes.func.isRequired,
  mindset: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  resource: state.resource,
  mindset: state.mindset,
})

export default connect(
  mapStateToProps,
  { loadMindsets, fetchFeatureResource }
)(Mindset)

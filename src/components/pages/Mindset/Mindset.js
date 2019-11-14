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
import { loadMindset } from "actions/mindsetActions"

// Material UI
import { Typography, Container } from "@material-ui/core"

const Mindset = ({ loadMindset, mindset }) => {
  const { mindsetId } = useParams()
  const { loading, error, current } = mindset

  useEffect(() => {
    loadMindset(mindsetId)
  }, [mindsetId, loadMindset])

  if (loading) {
    return <Spinner />
  } else if (error) {
    return (
      <Fragment>
        <Container maxWidth="lg">
          <Typography variant="h1">Your Compensation Mindset</Typography>
          <Typography variant="body1">
            There was a problem loading your results! Try again?
          </Typography>
        </Container>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <Container maxWidth="lg">
          <MindsetBody mindset={current} />
          <ReadMore />
          <FollowUp />
          <ResultsNote />
          <NextActions />
        </Container>
      </Fragment>
    )
  }
}

Mindset.propTypes = {
  loadMindset: PropTypes.func.isRequired,
  mindset: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  mindset: state.mindset,
})

export default connect(
  mapStateToProps,
  { loadMindset }
)(Mindset)

import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

// Components
import { Spinner } from "components/layout"
import { MindsetList } from "components/pages/Mindset"

// Redux
import { loadMindsets } from "actions/mindsetActions"

// Material UI
import { Typography, Container } from "@material-ui/core"

const Mindsets = ({ loadMindsets, mindset }) => {
  const { loading, error, all } = mindset

  useEffect(() => {
    loadMindsets()
  }, [loadMindsets])

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
          <MindsetList allMindsets={all} />
        </Container>
      </Fragment>
    )
  }
}

Mindsets.propTypes = {
  loadMindsets: PropTypes.func.isRequired,
  mindset: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  mindset: state.mindset,
})

export default connect(
  mapStateToProps,
  { loadMindsets }
)(Mindsets)

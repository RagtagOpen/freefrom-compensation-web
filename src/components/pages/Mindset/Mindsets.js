import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

// Components
import { Spinner, Title } from "components/layout"
import { MindsetList } from "components/pages/Mindset"

// Redux
import { loadMindsets } from "actions/mindsetActions"

// Material UI
import { Typography, Container, Box } from "@material-ui/core"

const Mindsets = ({ loadMindsets, mindset, quiz }) => {
  const { loading, loaded, error, all } = mindset

  useEffect(() => {
    if (!loaded) {
      loadMindsets()
    }
  }, [loadMindsets])

  if (loading) {
    return <Spinner />
  } else if (error) {
    return (
      <Fragment>
        <Container maxWidth="lg">
          <Title />
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
        <Container maxWidth="md">
          <Title />
          <Box mb={2}>
            <Typography variant="h2">Browse Compensation Mindsets</Typography>
          </Box>
          <MindsetList
            allMindsets={all}
            completedQuiz={quiz.completed}
            slug={quiz.mindset.slug}
          />
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
  quiz: state.quiz,
  mindset: state.mindset,
})

export default connect(
  mapStateToProps,
  { loadMindsets }
)(Mindsets)

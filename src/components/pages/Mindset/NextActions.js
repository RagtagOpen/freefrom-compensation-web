import React, { Fragment } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

// Material UI
import { Box, Button, Grid } from "@material-ui/core"

// Redux
import { resetQuiz } from "actions/quizActions"

const ResultsNote = ({ resetQuiz }) => {
  return (
    <Fragment>
      <Grid container justify="space-around" alignItems="center">
        <Box mb={2}>
          <Button
            color="primary"
            variant="outlined"
            component={Link}
            to="/mindsets"
          >
            See All Mindsets
          </Button>
        </Box>
        <Button
          color="primary"
          variant="outlined"
          component={Link}
          to="/"
          onClick={resetQuiz}
        >
          Start Over
        </Button>
      </Grid>
    </Fragment>
  )
}

ResultsNote.propTypes = {}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  { resetQuiz }
)(ResultsNote)

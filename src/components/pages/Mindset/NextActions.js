import React, { Fragment } from "react"
import { Link } from "react-router-dom"

// Material UI
import { Box, Button, Grid } from "@material-ui/core"

const ResultsNote = () => {
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
          to="/quiz/question/1"
        >
          Start Over
        </Button>
      </Grid>
    </Fragment>
  )
}

export default ResultsNote

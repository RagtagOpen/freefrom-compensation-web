import React, { useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, Redirect } from "react-router-dom"

// Tools
import { post } from "utils/api"
import { scrollToTop } from "utils/helpers"

// Material UI
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Link as MuiLink,
} from "@material-ui/core"

// Components
import { Title } from "components/layout"

const NextStepsSuccess = ({ quiz }) => {
  if (!quiz.agreement) {
    return <Redirect to="/" />
  }

  return (
    <Container maxWidth="md">
      <Title />
      <Box mb={2}>
        <Typography variant="h1">You're All Set!</Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="body1">
          If you don't see an email from compensation@freefrom.org soon, please
          check your Spam folder.
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="body1">
          In the meantime, we have a few quick questions about how we can
          improve this tool. Sharing your feedback will take less than one
          minute.
        </Typography>
      </Box>
      <Grid container>
        <Grid container item justify="space-around" alignItems="center">
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              href="https://www.surveymonkey.com/r/MYYY7L5"
              target="_blank"
            >
              Share Feedback
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="outlined"
              component={Link}
              to={`/mindsets/${quiz.mindset.slug}/${quiz.location}`}
              onClick={scrollToTop}
            >
              Back To Results
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

NextStepsSuccess.propTypes = {}

const mapStateToProps = state => ({
  quiz: state.quiz,
})

export default connect(
  mapStateToProps,
  {}
)(NextStepsSuccess)

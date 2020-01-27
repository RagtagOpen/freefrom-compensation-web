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
      <Box mb={2} mt={4}>
        <Typography variant="body1">
          In the meantime, we have a few quick questions about how we can
          improve this tool. Sharing your feedback will take less than one
          minute.
        </Typography>
        <Box mt={2}>
          <Grid container item justify="center" alignItems="center">
            <Button
              color="primary"
              variant="contained"
              href="https://www.surveymonkey.com/r/MYYY7L5"
              target="_blank"
            >
              Share Feedback
            </Button>
          </Grid>
        </Box>
      </Box>


      <Box mb={2}>
        <Typography variant="body1">
          Want to help us help other survivors?  Give $1, $3, or $5 so that we
          can continue to improve the Compensation Compass and help survivors
          get the compensation they need to stay safe.
        </Typography>

        <Box mt={3}>
          <Grid container item justify="center" alignItems="center">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="PC66QVXYX42RQ" />
            <Button
              color="primary"
              variant="contained"
              type="submit"
            >
              Make a Contribution
            </Button>
          </form>
          </Grid>
        </Box>
      </Box>

      <Box mt={5}>
        <Grid container item justify="center" alignItems="center">
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
      </Box>
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

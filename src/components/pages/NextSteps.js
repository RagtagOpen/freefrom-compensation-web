import React, { useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, Redirect } from "react-router-dom"

// Tools
import { mailer } from "utils/api"
import { scrollToTop, validateEmail } from "utils/helpers"

// Redux
import { setAlert } from "actions/alertActions"

// Material UI
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core"

// Components
import { Title } from "components/layout"

const NextSteps = ({ quiz, setAlert }) => {
  const [email, setEmail] = useState("")
  const [followup, setFollowup] = useState(false)
  const [success, setSuccess] = useState(false)

  if (!quiz.agreement || !quiz.cookies) {
    return <Redirect to="/" />
  }

  const submit = () => {
    const sendEmail = () => {
      const data = {
        email: email,
        mindset_id: quiz.mindset.id,
        state: quiz.location,
      }

      mailer("/send-results", data)
        .then(() => {
          setSuccess(true)
        })
        .catch(err => {
          setAlert(`Oops! Error sending email, please try again.`, "danger")
        })
    }

    if (followup) {
      mailer("/subscribe", { email: email })
        .then(() => {
          sendEmail()
        })
        .catch(err => {
          setAlert(`Oops! Error sending email, please try again.`, "danger")
        })
    } else {
      sendEmail()
    }
  }

  if (success) {
    return <Redirect to="/next-steps/success" />
  }

  return (
    <Container maxWidth="md">
      <Title />
      <Box mb={2}>
        <Typography variant="h1">Next Steps</Typography>
      </Box>
      <Typography variant="body1">
        Enter your email address to get personal follow-up from one of
        FreeFrom’s compensation experts and/or receive a copy of your results.
        We promise not to spam.
      </Typography>
      <Grid container>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Box mb={2}>
              <TextField
                id="email"
                label="Email Address"
                margin="normal"
                style={{ width: "300px" }}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box mb={2}>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="default"
                      checked={followup}
                      onClick={() => setFollowup(!followup)}
                      value="subscribe"
                    />
                  }
                  label="Follow up with me personally regarding my journey to compensation."
                />
              </FormGroup>
            </Box>
          </Grid>
        </Grid>
        <Grid container item justify="space-around" alignItems="center">
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={submit}
              disabled={!validateEmail(email)}
            >
              Submit
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

NextSteps.propTypes = {}

const mapStateToProps = state => ({
  quiz: state.quiz,
})

export default connect(
  mapStateToProps,
  { setAlert }
)(NextSteps)

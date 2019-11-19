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
} from "@material-ui/core"

// Components
import { Title } from "components/layout"

const NextSteps = ({ quiz }) => {
  const [email, setEmail] = useState("example@email.com")

  if (!quiz.agreement || !quiz.cookies) {
    return <Redirect to="/" />
  }

  const submitEmail = () => {
    const data = {
      email: email,
      mindset_id: quiz.mindset.id,
      state: quiz.location,
    }

    post("/send-results", data)
  }

  return (
    <Container maxWidth="md">
      <Title />
      <Box mb={2}>
        <Typography variant="h1">Next Steps</Typography>
      </Box>
      <Typography variant="p">
        Enter your email address to get personal follow-up from one of
        FreeFrom’s compensation experts and/or receive a copy of your results.
        We promise not to spam.
      </Typography>
      <Grid container>
        <Grid container item alignItems="center" justify="center">
          <Grid item>
            <Box mb={2}>
              <TextField
                id="email"
                label="Email Address"
                margin="normal"
                placeholder="example@email.com"
                style={{ width: "300px" }}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container item justify="space-around" alignItems="center">
          <Grid item>
            <Button color="primary" variant="contained" onClick={submitEmail}>
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
  {}
)(NextSteps)

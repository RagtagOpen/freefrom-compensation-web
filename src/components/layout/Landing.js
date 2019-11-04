import React from "react"
import { Redirect, Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Redux
import { setAgreement, setCookies } from "../../actions/quizActions"

// Material UI
import Button from "@material-ui/core/Button"
import MaterialLink from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Drawer from "@material-ui/core/Drawer"
import Grid from "@material-ui/core/Grid"

const Landing = ({ isAuthenticated, quiz, setAgreement, setCookies }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  const onAgreementClick = async e => {
    e.preventDefault()
    setAgreement(!quiz.agreement)
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h1">Compensation Compass</Typography>
      <Typography variant="body1" gutterBottom={true}>
        As a survivor of domestic violence, you could be eligible for money to
        cover some of the costs of the harm you experienced. This tool is
        designed to help you understand your options and how to pursue them. But
        first, answer a few short questions to better understand your priorities
        as you decide what type of compensation is best for you.
      </Typography>
      <Typography variant="subtitle1" gutterBottom={true}>
        Disclaimer: This is an educational and informational tool and the
        information contained within it does in no way constitute legal advice.
        Any person who intends to use the information contained herein in any
        way is solely responsible for independently verifying the information
        and obtaining independent legal or other expert advice if necessary
      </Typography>
      <Link to="/terms-and-conditions">Full Terms & Conditions</Link>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              color="default"
              checked={quiz.agreement}
              onClick={onAgreementClick}
              value="agreement"
            />
          }
          label="By checking this box, you acknowledge that you have read and agree to the terms and conditions provided."
        />
      </FormGroup>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to={"/quiz"}
        disabled={!quiz.agreement || quiz.cookies === null}
      >
        Start
      </Button>
      {quiz.cookies === null && (
        <Drawer anchor="bottom" open={quiz.cookies === null}>
          <Container maxWidth="md">
            <Grid
              container
              spacing={3}
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <Grid item xs={12}>
                <Typography color="secondary" align="center">
                  This website uses cookies to ensure you get the best
                  experience on our website.{" "}
                  <MaterialLink
                    color="secondary"
                    href="https://www.cookiesandyou.com/"
                  >
                    Learn more
                  </MaterialLink>
                </Typography>
              </Grid>
              <Grid container item xs={6} justify="flex-end">
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={() => {
                    setCookies(false)
                  }}
                >
                  Decline
                </Button>
              </Grid>
              <Grid container item xs={6} justify="flex-start">
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    setCookies(true)
                  }}
                >
                  Accept
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Drawer>
      )}
    </Container>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
  state: PropTypes.object,
  setAgreement: PropTypes.func.isRequired,
  setCookies: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  quiz: state.quiz,
})

export default connect(
  mapStateToProps,
  { setAgreement, setCookies }
)(Landing)

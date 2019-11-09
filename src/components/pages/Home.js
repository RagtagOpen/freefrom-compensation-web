import React from "react"
import { Redirect, Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Redux
import { setAgreement, setCookies } from "actions/quizActions"

// Material UI
import { Button, Typography, Container, FormGroup, FormControlLabel, Checkbox } from "@material-ui/core"

// Components
import { CookiesConsent } from "components/layout"

const Home = ({ isAuthenticated, quiz, setAgreement, setCookies }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  const onAgreementClick = async e => {
    e.preventDefault()
    setAgreement(!quiz.agreement)
  }

  return (
    <Container maxWidth="md">
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
        to={"/quiz/question/1"}
        disabled={!quiz.agreement || quiz.cookies === null}
      >
        Start
      </Button>
      {quiz.cookies === null && <CookiesConsent />}
    </Container>
  )
}

Home.propTypes = {
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
)(Home)

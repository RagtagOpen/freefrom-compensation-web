import React from "react"
import { Redirect, Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Redux
import { setAgreement, setCookies } from "actions/quizActions"

// Material UI
import {
  Grid,
  Box,
  Button,
  Typography,
  Container,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Link as MaterialLink,
} from "@material-ui/core"

// Components
import { CookiesConsent, Title } from "components/layout"

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
      <Title />
      <Box mb={2}>
        <Typography variant="body2">
          As a survivor of domestic violence, you could be eligible for money to
          cover some of the costs of the harm you experienced. This tool is
          designed to help you understand your options and how to pursue them.
          But first, answer a few short questions to better understand your
          priorities as you decide what type of compensation is best for you.
        </Typography>
      </Box>
      <Box mb={1}>
        <Typography variant="subtitle1">
          Disclaimer: This is an educational and informational tool and the
          information contained within it does in no way constitute legal
          advice. Any person who intends to use the information contained herein
          in any way is solely responsible for independently verifying the
          information and obtaining independent legal or other expert advice if
          necessary
        </Typography>
      </Box>
      <Box mb={2}>
        <MaterialLink
          color="inherit"
          component={Link}
          to="/terms-and-conditions"
        >
          Full Terms & Conditions
        </MaterialLink>
      </Box>
      <Box mb="2">
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
      </Box>
      <Grid container alignItems="center" justify="center">
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to={"/quiz/question/1"}
          disabled={!quiz.agreement || quiz.cookies === null}
        >
          Start
        </Button>
      </Grid>
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

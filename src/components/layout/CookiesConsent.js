import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Redux
import { setCookies } from "../../actions/quizActions"

// Material UI
import Button from "@material-ui/core/Button"
import MaterialLink from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Drawer from "@material-ui/core/Drawer"
import Grid from "@material-ui/core/Grid"

const CookiesConsent = ({ quiz, setCookies }) => {
  return (
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
              This website uses cookies to ensure you get the best experience on
              our website.{" "}
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
  )
}

CookiesConsent.propTypes = {
  setCookies: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  quiz: state.quiz,
})

export default connect(
  mapStateToProps,
  { setCookies }
)(CookiesConsent)

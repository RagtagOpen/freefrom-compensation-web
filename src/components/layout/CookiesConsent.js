import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Cookies from "js-cookie"

// Redux
import { setCookies } from "actions/quizActions"

// Material UI
import {
  Button,
  Link as MaterialLink,
  Typography,
  Container,
  Drawer,
  Grid,
  makeStyles,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  link: {
    color: "#47CCCC",
  },
}))

const CookiesConsent = ({ quiz, setCookies }) => {
  const classes = useStyles()

  if (Cookies.get("c") !== undefined) {
    // Cookie set already!
    setCookies(true)
    return null
  }

  const handleClick = cookies => {
    if (cookies) {
      Cookies.set("c", "true")
    }

    setCookies(cookies)
  }

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
                className={classes.link}
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
                handleClick(false)
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
                handleClick(true)
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

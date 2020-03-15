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
  Divider,
  makeStyles,
  Link as MuiLink,
} from "@material-ui/core"

// Components
import { Title } from "components/layout"

const useStyles = makeStyles(theme => ({
  buttonBox: {
    flexDirection: "row",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
      alignItems: "center",
      paddingLeft: 10,
      paddingRight: 10,
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: "row",
    },
  },
  titleBox: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
    }
  },
  actionButton: {
    marginBottom: 0,
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
    },
  },
  backButton: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center",
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: "flex-start",
    },
  }
}))

const NextStepsSuccess = ({ quiz }) => {
  const classes = useStyles();

  if (!quiz.agreement) {
    return <Redirect to="/" />
  }

  return (
    <Container maxWidth="md">
      <Title />
      <Box className={classes.titleBox}>
        <Box mb={2}>
          <Typography variant="h1">You're All Set!</Typography>
        </Box>
        <Box mb={4}>
          <Typography variant="body1">
            Make sure to add compass@freefrom.org to your address book so you receive our emails.
            If you don't see an email from us in the next day, please check your Spam folder.
          </Typography>
        </Box>
      </Box>

      <Divider light={true} />

      <Box className={classes.buttonBox} display="flex" alignItems="flex-start" justifyContent="space-between" paddingBottom={4} paddingTop={4} >
        <Box maxWidth={500}>
          <Box mb={2}>
            <Typography variant="h2">Help us improve this tool</Typography>
          </Box>
          <Typography variant="body1">
            We have a few quick questions about how we can
            improve this tool. Sharing your feedback will take less than one
            minute.
          </Typography>
        </Box>
        <Button
          className={classes.actionButton}
          color="primary"
          variant="contained"
          href="https://www.surveymonkey.com/r/MYYY7L5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Share Feedback
        </Button>
      </Box>

      <Divider light={true} />

      <Box className={classes.buttonBox} display="flex" alignItems="flex-start" justifyContent="space-between" paddingTop={4} paddingBottom={4}>
        <Box maxWidth={500}>
          <Box mb={2}>
            <Typography variant="h2">Support FreeFrom</Typography>
          </Box>
          <Typography variant="body1">
            Want to help us help other survivors?  Give $1, $3, or $5 so that we
            can continue to improve the Compensation Compass and help survivors
            get the compensation they need to stay safe.
          </Typography>
        </Box>

        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" rel="noopener noreferrer">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="PC66QVXYX42RQ" />
          <Button
            className={classes.actionButton}
            color="primary"
            variant="contained"
            type="submit"
          >
            Make a Contribution
          </Button>
        </form>
      </Box>

      <Divider light={true} />

      <Box mt={4}>
        <Grid container item className={classes.backButton}>
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

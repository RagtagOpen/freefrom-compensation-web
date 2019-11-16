import React from "react"
import { Link } from "react-router-dom"

// Material UI
import { Typography, Button, Grid, makeStyles, Box } from "@material-ui/core"

// Images
import FollowUpImage from "images/general/follow-up.png"
import EmailMeImage from "images/general/email-me.png"

const useStyles = makeStyles(theme => ({
  grid: {
    border: "3px solid #47CCCC",
    borderRadius: "8px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
  },
  uppercase: {
    textTransform: "uppercase",
  },
  image: {
    maxWidth: "100px",
  },
}))

const FollowUp = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.grid} justify="center">
      <Grid container align="center" justify="space-around">
        <Grid item>
          <img src={FollowUpImage} className={classes.image} />
          <Typography className={classes.uppercase} variant="h3">
            Follow Up With Me
          </Typography>
        </Grid>
        <Grid item>
          <img src={EmailMeImage} className={classes.image} />
          <Typography className={classes.uppercase} variant="h3">
            Email Me My Results
          </Typography>
        </Grid>
      </Grid>
      <Box mt={4} mb={2}>
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/next-steps"
        >
          Continue
        </Button>
      </Box>
    </Grid>
  )
}

export default FollowUp

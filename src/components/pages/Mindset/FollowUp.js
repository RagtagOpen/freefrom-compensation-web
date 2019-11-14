import React from "react"

// Material UI
import { Typography, Button, Container, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  container: {
    border: "1px solid rgb(71, 204, 204)",
    borderRadius: "4px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
  },
}))

const FollowUp = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container} align="center">
      <Typography variant="body1">Follow Up With Me</Typography>
      <Button
        variant="outlined"
        href="/"
        key="start-over"
        className={classes.button}
      >
        Continue
      </Button>
    </Container>
  )
}

export default FollowUp

import React from "react"

// Material UI
import { Typography, Button, Container, makeStyles, Box } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
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
      <Box m={3}>
        <Button color="primary" variant="contained" href="/">
          Continue
        </Button>
      </Box>
    </Container>
  )
}

export default FollowUp

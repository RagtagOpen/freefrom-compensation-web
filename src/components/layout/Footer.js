import React from "react"
import { Link } from "react-router-dom"

// Material UI
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import MaterialLink from "@material-ui/core/Link"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.footer,
    height: "60px",
    width: "100%",
    position: "fixed",
    bottom: 0,
    color: "#47CCCC",
    textDecoration: "underline",
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid container item xs={6} justify="flex-start">
            <MaterialLink color="inherit" to="/disclaimer" component={Link}>
              Disclaimer
            </MaterialLink>
          </Grid>
          <Grid container item xs={6} justify="flex-end">
            <MaterialLink color="inherit" to="/report" component={Link}>
              Report an issue with this tool
            </MaterialLink>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer

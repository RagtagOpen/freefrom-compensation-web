import React from "react"
import { Link } from "react-router-dom"
import Ragtag from "../../images/general/ragtag.png"

// Material UI
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import MaterialLink from "@material-ui/core/Link"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.footer,
    width: "100%",
    height: 'auto',
    position: "fixed",
    bottom: 0,
    color: "#47CCCC",
    textDecoration: "underline",
    padding: '20px 0px',
    marginBottom: '20px'
  },
  link: {
    padding: '5px 0px',
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid container item xs={6} justify="space-around" direction="column" alignItems="flex-start">
            <MaterialLink className={classes.link} color="inherit" href="mailto:compensation@freefrom.org">
              Problem with this tool?
            </MaterialLink>
            <MaterialLink className={classes.link} color="inherit" to="/disclaimer" component={Link}>
              Disclaimer
            </MaterialLink>
            <MaterialLink className={classes.link} color="inherit" to="/privacy-policy" component={Link}>
              Privacy Policy
            </MaterialLink>
            <MaterialLink className={classes.link} color="inherit" to="https://freefrom.org">
              FreeFrom homepage
            </MaterialLink>
          </Grid>
          <Grid container item xs={6} justify="flex-end">
            <img src={Ragtag} alt="Powered by Ragtag" title="Powered by Ragtag" />
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer

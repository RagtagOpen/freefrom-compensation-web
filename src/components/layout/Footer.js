import React from "react"
import { Link } from "react-router-dom"
import Ragtag from "images/general/ragtag.png"

// Material UI
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Container, Link as MaterialLink } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  footer: {
    bottom: 0,
    position: "fixed",
    backgroundColor: theme.palette.background.footer,
    width: "100%",
    height: "auto",
    [theme.breakpoints.up("sm")]: {
      position: "fixed",
      bottom: 0,
    },
    color: "#47CCCC",
    textDecoration: "underline",
    padding: "20px 0px 40px",
    marginTop: "40px",
  },
  link: {
    padding: "5px 0px",
  },
  image: {
    width: "134px",
    height: "49px",
    opacity: "85%",
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justify="space-between"
        >
          <Grid
            container
            item
            xs={6}
            justify="space-around"
            direction="column"
            alignItems="flex-start"
          >
            <MaterialLink
              className={classes.link}
              color="inherit"
              href="mailto:compensation@freefrom.org"
            >
              Problem with this tool?
            </MaterialLink>
            <MaterialLink
              className={classes.link}
              color="inherit"
              to="/disclaimer"
              component={Link}
            >
              Disclaimer
            </MaterialLink>
            <MaterialLink
              className={classes.link}
              color="inherit"
              to="/privacy-policy"
              component={Link}
            >
              Privacy Policy
            </MaterialLink>
            <MaterialLink
              className={classes.link}
              color="inherit"
              href="https://freefrom.org"
            >
              FreeFrom homepage
            </MaterialLink>
          </Grid>
          <Grid container item xs={6} justify="flex-end">
            <img
              src={Ragtag}
              alt="Powered by Ragtag"
              title="Powered by Ragtag"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer

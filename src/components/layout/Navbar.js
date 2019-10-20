import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Redux
import { logout } from "../../actions/authActions"

// Material
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MaterialLink from "@material-ui/core/Link"

// Material Icons
import HomeIcon from "@material-ui/icons/Home"
import FolderIcon from "@material-ui/icons/Folder"
import EmailIcon from "@material-ui/icons/Email"

// Logo
import logo from "../../images/logo.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  link: {
    fontFamily: "Roboto",
    textTransform: "uppercase",
    color: "#F06449",
    fontSize: "1.125rem",
    letterSpacing: "0.1em",
    fontWeight: 500,
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxHeight: "50px",
  },
}))

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classes = useStyles()

  const [state, setState] = React.useState({
    drawer: false,
  })

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, drawer: open })
  }

  const authLinks = (
    <MaterialLink
      className={classes.link}
      underline="hover"
      component={Link}
      to="#!"
      onClick={logout}
    >
      Sign Out
    </MaterialLink>
  )

  const authMenu = (
    <IconButton
    edge="start"
    className={classes.menuButton}
    color="inherit"
    aria-label="menu"
    onClick={toggleDrawer(true)}
  >
    <MenuIcon />
  </IconButton>
  )

  const authDrawer = (
    <Drawer open={state.drawer} onClose={toggleDrawer(false)}>
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key="Home" {...{ to: "/" }} component={Link}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          key="Resource Categories"
          {...{ to: "/resource-categories" }}
          component={Link}
        >
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Resource Categories" />
        </ListItem>
      </List>
      <Divider />
    </div>
  </Drawer>
  )

  const guestLinks = (
    <MaterialLink
      className={classes.link}
      underline="hover"
      component="button"
      onClick={() => document.location.replace("https://www.weather.com")}
    >
      Exit Site
    </MaterialLink>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {isAuthenticated ? authMenu : null}
          <div className={classes.title}>
            <Link to="/">
              <img
                className={classes.logo}
                alt="FreeFrom"
                title="FreeFrom"
                src={logo}
              />
            </Link>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </Toolbar>
      </AppBar>
      {isAuthenticated ? authDrawer : null}
    </div>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(
  mapStateToProps,
  { logout }
)(Navbar)

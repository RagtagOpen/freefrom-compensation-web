import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Redux
import { logout } from "actions/authActions"

// Material
import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link as MaterialLink,
} from "@material-ui/core"

// Material Icons
import {
  Home as HomeIcon,
  Folder as FolderIcon,
  Menu as MenuIcon,
} from "@material-ui/icons"

// Logo
import logo from "images/general/logo.png"

const useStyles = makeStyles(theme => ({
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
      href="https://www.weather.com"
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

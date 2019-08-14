import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Assets
import logo from "../../images/logo.png"

// Theme
import theme from '../../theme';

const styles = {
  header: {
    marginBottom: `1.45rem`,
    borderBottom: `2px solid ${theme.palette.background.default}`,
    backgroundColor: theme.palette.background.default,
    flexGrow: 1
  },
  logo: {
    maxWidth: '200px',
    marginBottom: '0'
  }
}

const Header = ({ siteTitle, classes }) => (
  <React.Fragment>
    <AppBar position="static" color="default"  className={classes.header} >
      <Toolbar>
          <Link to="/" >
            <img src={logo} alt={siteTitle} title={siteTitle} className={classes.logo}/>
          </Link>
      </Toolbar>
    </AppBar>
  </React.Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)

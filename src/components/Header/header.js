import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { withStyles } from '@material-ui/styles';

// Assets
import logo from "../../images/logo.png"

// Theme
import theme from '../../theme';

const styles = {
  header: {
    marginBottom: `1.45rem`,
    borderBottom: `2px solid lightgray`,
    backgroundColor: theme.palette.background.default
  }
}

const Header = ({ siteTitle, classes }) => (
  <header className={classes.header}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, maxWidth: `300px` }}>
        <Link to="/" style={{ color: `white`, textDecoration: `none` }}>
          <img src={logo} alt="FreeFrom" title={siteTitle} />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)

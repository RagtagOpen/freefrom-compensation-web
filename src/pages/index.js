import React from "react"
import { withStyles } from "@material-ui/styles"
import Container from '@material-ui/core/Container';

// Components
import Layout from "../components/layout"
import Welcome from "../components/Welcome/Welcome"
import SEO from "../components/seo"

// Assets
import background from "../images/background.jpg"

import theme from '../theme'

const styles = {
  body: {
    backgroundColor: theme.palette.background.default,
    backgroundImage: background
  }
}

const IndexPage = ({ classes }) => (
    <Layout>
      <SEO title="Home" />
      <Container maxWidth="lg">
        <Welcome />
      </Container>
    </Layout>
)

export default withStyles(styles)(IndexPage)

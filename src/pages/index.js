import React from "react"
import { Link } from "gatsby"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// Components
import Layout from "../components/layout"
import Welcome from "../components/Welcome/Welcome"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
      <Container maxWidth="lg">
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
        <Link to="/page-2/">Go to page 2</Link>
        <Welcome />
      </Container>
    </Layout>
)

export default IndexPage

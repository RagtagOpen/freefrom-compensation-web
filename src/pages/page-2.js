import React from "react"
import { Link } from "gatsby"
import Container from '@material-ui/core/Container';

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Container maxWidth="md">
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </Container>
)

export default SecondPage

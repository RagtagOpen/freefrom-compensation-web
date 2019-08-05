import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Welcome from "../components/Welcome"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/page-2/">Go to page 2</Link>
    <Welcome />
  </Layout>
)

export default IndexPage

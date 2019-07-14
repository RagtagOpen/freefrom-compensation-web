import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>FreeFrom Front End</h1>
    <p>Welcome to the new FreeFrom Quiz</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Speaking = () => (
  <Layout>
    <SEO title="Speaking" />
    <h1>Resume</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default Speaking;

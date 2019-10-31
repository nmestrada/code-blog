import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About Me</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <h2>Natalie Estrada</h2>
    </div>
    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage

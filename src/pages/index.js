import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="intro">
        <h2>Hi! my name is Natalie Estrada</h2>
        <h2>I'm an aspiring software developer!</h2>
        <h2>I want to make things, that make a difference</h2>
        <a href="#">In</a> - 
        <a href="#">GitHub</a>
    </div>
  </Layout>
);

export default IndexPage

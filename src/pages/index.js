import React from "react"
//import { Link, graphql } from "gatsby"
import headshot from '../images/headshoticon1.jpg'

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="about-me">
    <h2>About Me</h2>
        <p>I started my career in customer service as a supervisor at Starbucks. Now I'm looking to transition to Software Engineering.</p>
            <p>My Skills include:</p>
        <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Sequelize</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Restful APIs</li>
        </ul>
        <p>I'm always up for learning new libraries, frameworks and languages.</p>
        <p>My Hobbies include: Argentine Tango dancing, gardening and watercolor painting</p>
    </div>

  </Layout>
);

export default IndexPage

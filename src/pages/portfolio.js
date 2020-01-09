import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"
//Effects
import { FaGithub } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
//Components
import Video from '../components/Video'

const Portfolio = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <div className="projects">
        <h2>Projects</h2>
        <Fade bottom>
        <div className="weJay">
            <h3>weJay</h3>
            <p>A interactive playlist mobile application</p>
            <p>Check our weJay video!</p>
            <Video/>
        </div>
        </Fade>
        <Fade bottom>
        <div className="beerHopper">
            <h3>
                <a target="_blank" href="https://beerhopperfullstack.herokuapp.com/beers">BeerHopper</a>
                <FaGithub/>
            </h3>
            <p>An e-commerce site built in a week and half sprint</p>
        </div>
        </Fade>
        <Fade bottom> 
        <div className="plantify">
                <h3>Plantify</h3>
            <p>A mobile application to help the user identify plants by taking a photo</p>
        </div>
        </Fade>
    </div>
    <Link to="/">Home</Link>
  </Layout>
)

export default Portfolio
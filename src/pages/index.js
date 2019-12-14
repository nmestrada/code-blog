import React from "react"
//import { Link, graphql } from "gatsby"
import headshot from '../images/headshoticon1.jpg'

import Layout from "../components/layout"
import SEO from "../components/seo"
//Effects
import { FaGithub } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="intro">
        <img className="headshot" src={headshot}></img>
        <div className="blurb">
            <h2>Natalie Estrada</h2>
            <h4>Software Engineer</h4>
            <h4>Building and designing impactful websites!</h4>
        </div>
    </div>
    <div className="projects">
        <h2>Projects</h2>
        <Fade bottom>
        <div className="weJay">
                <h3>weJay</h3>
            <p>A interactive playlist mobile application</p>
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
  </Layout>
);

export default IndexPage

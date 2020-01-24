import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"
//Effects
import { FaGithub } from "react-icons/fa"
import Fade from "react-reveal/Fade"
//Components
import Video from "../components/Video"

//images
import beerHopper1 from "../images/beerHopper1.png"
import weJay1 from "../images/weJay1.png"
import weJay2 from "../images/weJay2.png"
import weJay3 from "../images/weJay3.png"
import weJay4 from "../images/weJay4.png"
import plantify1 from "../images/plantify1.jpg"
import plantify2 from "../images/plantify2.jpg"
import plantify3 from "../images/plantify3.jpg"
import plantify4 from "../images/plantify4.jpg"

const Portfolio = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <div className="projects">
      <Fade bottom>
        <div className="weJay">
          <div className="section-title">
            <h3 className="project-title">weJay</h3>
            <h3 className="icons">
              <a
                style={{ color: "white" }}
                href="https://github.com/weJayCapstone/weJay"
                target="_blank"
              >
                Github <FaGithub style={{ "margin-right": "0.5rem" }} />
              </a>
            </h3>
          </div>
          <div className="section-content">
            <p>
              Node.js, React Native, Expo SDK, Google Firestore, Spotify API
            </p>
            <div className="images">
              <img src={weJay1}></img>
              <img src={weJay2}></img>
              <img src={weJay3}></img>
              <img src={weJay4}></img>
            </div>
            <p>1 of 3 Full Stack Developers</p>
            <p>
              Was built to enhance party goers experience by helping them vote
              on songs that would played next on the party playlist!
            </p>
            <p>Check our weJay video!</p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="beerHopper">
          <div className="section-title">
            <h3 className="project-title">BeerHopper</h3>
            <h3 className="icons">
              <a
                style={{ color: "white" }}
                href="https://beerhopperfullstack.herokuapp.com/beers"
                target="_blank"
              >
                Heroku Link{" "}
              </a>
              -
              <a
                style={{ color: "white" }}
                href="https://github.com/TeamForLoops/beerHopper"
                target="_blank"
              >
                {" "}
                Github <FaGithub />
              </a>
            </h3>
          </div>
          <div className="section-content">
            <p>
              Node.js, React, Redux, Sequelize, PostgreSQL, Express, React
              Bootstrap
            </p>
            <img src={beerHopper1}></img>
            <p>1 of 4 Full Stack Developers</p>
            <p>An e-commerce site built in a week and half sprint</p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="plantify">
          <div className="section-title">
            <h3 className="project-title">Plantify</h3>
            <h3 className="icons">
              {" "}
              <a
                style={{ color: "white" }}
                href="https://github.com/nmestrada/Plantify"
                target="_blank"
              >
                {" "}
                Github <FaGithub />
              </a>
            </h3>
          </div>
          <div className="section-content">
            <p>Node.js, React Native, Google Firestore, ExpoSDK, Clarfai API</p>
            <div className="images">
              <img src={plantify1}></img>
              <img src={plantify2}></img>
              <img src={plantify3}></img>
            </div>
            <p>Sole Developer</p>
            <p>
              A mobile application to help the user identify plants by taking a
              photo
            </p>
            <p>Used API with a custom trained ML photo recognition API</p>
          </div>
        </div>
      </Fade>
    </div>
    <Link to="/">Home</Link>
  </Layout>
)

export default Portfolio

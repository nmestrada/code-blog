import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import headshot from "../images/headshoticon1.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Navbar({ siteTitle }) {
  return (
    <div id="nav">
      <div className="intro">
        <img className="headshot" src={headshot}></img>
      </div>
      <div className="blurb">
        <h2>Natalie Estrada</h2>
        <h3>Full Stack Software Engineer</h3>
      </div>
      <nav className="nav">
        <div className="Links">
          <Link to="/">About</Link>
          <Link to="portfolio">Portfolio</Link>
          <a href="https://github.com/nmestrada" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/natalie-estrada-dev/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

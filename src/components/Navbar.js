import React from 'react';
import { Link } from "gatsby";
import PropTypes from "prop-types"
import headshot from '../images/headshoticon1.jpg'

export default function Navbar({siteTitle}) {
    return (
        <div id="nav">
            <div className="intro">
                <img className="headshot" src={headshot}></img>
                <div className="blurb">
                    <h2>Natalie Estrada</h2>
                    <h4>Software Engineer</h4>
                    <h4>Building and designing impactful websites!</h4>
                </div>
            </div>
            <nav className="nav">
                <div className="Links">
                <Link to="/">About</Link>
                <Link to="blog">Blog</Link>
                <Link to="portfolio">Portfolio</Link>
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
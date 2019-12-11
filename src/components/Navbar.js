import React from 'react';
import { Link } from "gatsby";
import PropTypes from "prop-types"

export default function Navbar({siteTitle}) {
    return (
        <div id="nav">
            <nav className="nav">
                <h1 className="title"><Link
                to="/">
                    {siteTitle}
                </Link></h1>
                <div className="Links">
                <Link to="/">Home</Link>
                <Link to="blog">Blog</Link>
                <Link to="projects">Projects</Link>
                {/* <Link to="/NewPostForm">New Post</Link> */}
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
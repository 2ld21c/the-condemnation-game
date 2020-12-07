import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/header.css"



const Header = ({ siteTitle }) => {
  return (
    <div className="header">
      <div className="content">
          <div className="title">
              <Link to="/" className="link"><h1>{siteTitle}</h1></Link>
              <h2>An unflinching look at the human condition</h2>
          </div>
      </div>
    </div>
  )
} 
  


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

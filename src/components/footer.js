import React from "react"
import "../styles/footer.css"

const Footer = ({siteTitle}) => {
    return (
        <div className="footer">
          <hr/>
          <p>© {new Date().getFullYear()}, {siteTitle}</p>
        </div>
    )
}

export default Footer
import React from "react"
import {Link} from "gatsby"
import "../styles/bookheader.css"

const BookHeader = () => {
    return (
        <div className="bookheader">
            <div className="bookheader-content">
                <Link to="/">
                    <h1 className="bookheader-title">The Condemnation Game</h1>
                </Link>
                <div className="bookheader-content-links">
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link to="/contents">
                        <p>Table of Contents</p>
                    </Link>
                </div>
            </div>
            <div className="bookheader-content-links-mobile">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/contents">
                    <p>Table of Contents</p>
                </Link>
            </div>
        </div>
    )
}

export default BookHeader
import React from "react"
import "../styles/bookfooter.css"

const BookFooter = () => {
    return (
        <div className="bookfooter">
          <hr/>
          <p>© {new Date().getFullYear()}, The Condemnation Game</p>
        </div>
    )
}

export default BookFooter
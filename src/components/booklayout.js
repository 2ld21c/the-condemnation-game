import React from "react"
import BookHeader from "./bookheader"
import BookFooter from "./bookfooter"
import "../styles/booklayout.css"

const BookLayout = ({children}) => {
    return (
        <div className="booklayout">
            <BookHeader />
            <div className="booklayout-main">
                {children}
            </div>
            <BookFooter />
        </div>
    )
}

export default BookLayout


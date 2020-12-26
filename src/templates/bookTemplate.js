import React from "react"
import BookLayout from "../components/booklayout"
import PostTag from "../components/posttag";
import Img from "gatsby-image"
import SEO from "../components/seo";
import "../styles/book.css"

const Book = ({data}) => {

    const post = data.markdownRemark;
    let postImg = post.frontmatter.image ? post.frontmatter.image.childImageSharp.fluid : null

    return (
        <BookLayout>
            <SEO title={post.frontmatter.title} />
             <div className="book">
                <h1>{post.frontmatter.title}</h1>
                <small>{post.frontmatter.date}</small>
                <hr/>
                {postImg && 
                    <Img fluid={postImg} />
                }
                <div className="book-main-body" dangerouslySetInnerHTML={{__html: post.html}} />
                <div className="book-main-tags">
                    {post.frontmatter.tags.map(tag => {
                        return (<PostTag tag={tag} />)
                    })}
                </div>
            </div>
        </BookLayout>
       
    )
}

export default Book

export const pageQuery = graphql`
query bookQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html 
        frontmatter {
            title 
            date(formatString: "MMMM DD, YYYY") 
            tags
            image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
        }
    }
}
`
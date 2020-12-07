import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import {GiBookshelf, GiBookmarklet, GiScrollQuill} from "react-icons/gi"
import {ImNewspaper, ImLibrary, ImBook} from "react-icons/im"
import "../styles/main.css"

const Index = ({data}) => {
  console.log(data)
  const posts = data.allMarkdownRemark.edges
    return (
        <Layout>
            <div className="top">
              <div className="image-wrap">
                  <Img fluid={data.mainPic.childImageSharp.fluid} />
              </div>
              <div className="intro-wrap">
                <h1>The Latest</h1>
                <small>{posts[0].node.frontmatter.date}</small>
                <hr style={{border: "1px solid gray"}}/>
                <div className="post">
                  <h2>{posts[0].node.frontmatter.title}</h2>
                  <div className="post-main">
                    <Img 
                      fluid={posts[0].node.frontmatter.image.childImageSharp.fluid} 
                      style={{width: "180px", float: "left", margin: "10px"}}
                    />
                    <p>{posts[0].node.excerpt}</p>
                    <Link to={posts[0].node.fields.slug}>
                      <button>Read Full Submission</button>
                    </Link>             
                  </div>
                </div>
              </div>    
            </div>
            <div className="bottom">
              <div className="card">
                <p style={{color: "gray"}}><GiBookmarklet size={48}/></p>
                <h2>Book</h2>
              </div>
              <div className="card">
                <p style={{color: "gray"}}><GiScrollQuill size={48}/></p>
                <h2>Blog</h2>
              </div>
              <div className="card">
                <p style={{color: "gray"}}><GiBookshelf size={48}/></p>
                <h2>References</h2>
              </div>
            </div>
        </Layout>
    )
}

export default Index

export const pageQuery = graphql`
query indexQuery {
  mainPic: file(relativePath: {eq: "mother_child.jpg"}) {
      childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
          }
      }
  }
  allMarkdownRemark(limit: 20 sort: { fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        html 
        excerpt(pruneLength: 720)
        frontmatter {
          title 
          date(formatString: "MMMM DD, YYYY") 
          tags
          pagetype
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
}
` 
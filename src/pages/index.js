import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"

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
                  </div>
                </div>
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
import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import PostTag from "../components/posttag";
import Img from "gatsby-image";
import SEO from "../components/seo";

const ArchiveTemplate = (props) => {
    
    const posts = props.data.allMarkdownRemark.edges;
    const { totalCount } = props.data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"}`;

    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/archives" : `/archives/${currentPage - 1}`
    const nextPage = `/archives/${currentPage + 1}`

    return (
        <Layout>
          <SEO title="Archives" keywords={[`2ld21c`, `the condemnation game`, `geopolitics`, `philosophy`, `psychology`]} />
            <div className="archives">
                <div className="archives-body">
                  <i><h2>{tagHeader}</h2></i>
                  {posts.map((post, i) => {
                      const tags = post.node.frontmatter.tags;
                      return (
                          <div className="archives-body-post" key={i}>
                              <Link className="archives-body-post-link"
                                  to={post.node.fields.slug}
                              ><h2>{post.node.frontmatter.title}</h2>
                              </Link>
                              <small className="archives-body-post-date">Posted on {post.node.frontmatter.date}</small>
                              <hr className="archives-body-post-under"/>
                              {post.node.frontmatter.image && 
                                <Img
                                    fluid={post.node.frontmatter.image.childImageSharp.fluid}
                                    style={{width: "200px", float: "left", marginRight: "5px"}} 
                                />
                              }
                              <p>{post.node.excerpt}</p>
                              <Link className="archives-body-post-link"
                                  to={post.node.fields.slug}
                              ><small> Read full post</small>
                              </Link>
                              <hr/>
                              <div className="archives-body-post-tag-wrap">
                                  {tags.map((tag, i) => {
                                      return <PostTag key={i} tag={tag}/>
                                  })}
                              </div>
                          </div>
                      )
                  })}
                  <div className="archives-body-pagination">
                  {!isFirst && (
                            <Link to={prevPage} rel="prev" style={{ textDecoration: `none` }}>
                                <span className="archives-body-pagination-link-left">← Previous Page</span>
                            </Link>
                    )}
                    {!isLast && (
                        <Link to={nextPage} rel="next" style={{ textDecoration: `none` }}>
                            <span className="archives-body-pagination-link-right">Next Page →</span>
                        </Link>
                    )}
                  </div>
                </div>
            </div>
        </Layout>
    );
}

export default ArchiveTemplate;

export const pageQuery = graphql`
query paginationQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(limit: $limit skip: $skip sort: { fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        html 
        excerpt(pruneLength: 400)
        frontmatter {
          title 
          date 
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
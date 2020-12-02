import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import PostTag from "../components/posttag";
import Img from "gatsby-image"
import SEO from "../components/seo";

const TagTemplate = ({pageContext, data}) => {
    const posts = data.allMarkdownRemark.edges;
    const { tag } = pageContext;
    const { totalCount } = data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

    return (
        <Layout>
            <SEO title={tag} />
            <div className="tagtemplate">
                <div className="tagtemplate-body">
                <i><h2>{tagHeader}</h2></i>
                {posts.map((post, i) => {
                    const tags = post.node.frontmatter.tags;
                    return (
                        <div className="tagtemplate-body-post" key={i}>
                            <Link className="tagtemplate-body-post-link"
                                to={post.node.fields.slug}
                            ><h2>{post.node.frontmatter.title}</h2>
                            </Link>
                            <small className="tagtemplate-body-post-date">Posted on {post.node.frontmatter.date}</small>
                            <hr className="tagtemplate-body-post-under"/>
                            {post.node.frontmatter.image && 
                                <Img
                                    fluid={post.node.frontmatter.image.childImageSharp.fluid}
                                    style={{width: "200px", float: "left", marginRight: "5px"}} 
                                />
                            }
                            <p>{post.node.excerpt}</p>
                            <Link className="tagtemplate-body-post-link"
                                to={post.node.fields.slug}
                            ><small> Read full post</small>
                            </Link>
                            <hr/>
                            <div className="tagtemplate-body-post-tag-wrap">
                                {tags.map((tag, i) => {
                                    return <PostTag key={i} tag={tag}/>
                                })}
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </Layout>
    );
}

export default TagTemplate;

export const pageQuery = graphql`
  query($tag: String) { 
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
         node {
            excerpt(pruneLength: 400)
            html
            id
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
             fields {
                slug
            }
        }
      }
    }
  }
`
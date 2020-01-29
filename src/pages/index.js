import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>BLOG WHATEVER</h1>
        <h5>{ data.allMarkdownRemark.totalCount }</h5>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3>{ node.frontmatter.title } * { node.frontmatter.date }</h3>
              <p>{node.excerpt}</p>
            </div>

          ))
        }
      </div>

  </Layout>
)}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          excerpt
        }
      }
    }
  }
`

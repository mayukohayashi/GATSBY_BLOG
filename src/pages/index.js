import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: green;
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>BLOG WHATEVER</h1>
        <h5>記事数: { data.allMarkdownRemark.totalCount }</h5>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>{
                node.frontmatter.title } * { node.frontmatter.date }
              </BlogTitle>
            </BlogLink>
              <p>{node.excerpt}</p>
            </div>

          ))
        }
      </div>

  </Layout>
)}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

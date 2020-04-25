import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Homepage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <article>
          <h2>Home</h2>
          <p>
            <Link to="/posts">Artikel</Link>
          </p>
        </article>
      </Layout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

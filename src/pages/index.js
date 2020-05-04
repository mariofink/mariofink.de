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
          <h2>
            <span role="img" aria-label="Hallo">
              👋
            </span>
            !
          </h2>
          <p>
            Mein Name ist Mario Fink — ich arbeite als Webentwickler &amp; UX
            Designer in Fulda.
          </p>
          <p>
            <em>Konkret heißt das,</em> ich entwerfe und baue Webseiten die
          </p>
          <ul>
            <li>leicht zugänglich sind</li>
            <li>sich auf das Wesentliche konzentrieren</li>
            <li>den Besucher nicht mit unnötigem Klimm-Bimm verwirren</li>
          </ul>
          <p>
            <em>Im Detail heißt das,</em> ich beschäftige mich mit
          </p>
          <ul>
            <li>HTML5, CSS3 &amp; JavaScript</li>
            <li>Responsive Design</li>
            <li>Progressive Enhancement</li>
            <li>Benutzer-zentriertem Design</li>
            <li>vielem mehr</li>
          </ul>
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

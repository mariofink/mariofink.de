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
              👋🏻
            </span>
            !
          </h2>
          <p>
            Mein Name ist Mario Fink — ich arbeite als Webentwickler für einen
            großen Reifenhersteller in Fulda.
          </p>
          <p>Daneben bastele ich gerne an kleinen Nebenprojekten:</p>
          <p>
            <ul>
              <li>
                <a href="//addons.mozilla.org/en-US/firefox/addon/epic-pinboard/">
                  Epic Pinboard
                </a>{" "}
                – eine Firefox Erweiterung für Pinboard.in mit aufgeräumter
                Nutzeroberfläche
              </li>
              <li>
                <a href="//mariofink.github.io/react-intro-slides">
                  Intro to React
                </a>{" "}
                – eine Einführung in React die ich für meine Kollegen erstellt
                habe
              </li>
              <li>
                <a href="//mariofink.github.io/farbenspiel/">Farbenspiel</a> –
                kleiner Spielplatz zur Generierung von Farbschemata
              </li>
              <li>
                <a href="//github.com/mariofink">Mehr auf GitHub</a>
              </li>
            </ul>
          </p>
          <p>Hin und wieder schreibe ich über das, was ich tue:</p>
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

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
          <p>Daneben bastele ich gerne an kleinen Projekten:</p>
          <p>
            <ul>
              <li>
                <a href="//addons.mozilla.org/en-US/firefox/addon/epic-pinboard/">
                  Epic Pinboard
                </a>{" "}
                – Firefox Erweiterung für Pinboard.in mit aufgeräumter
                Nutzeroberfläche
              </li>
              <li>
                <a href="//mariofink.github.io/react-intro-slides">
                  Intro to React
                </a>{" "}
                – Einführung in React, die ich für meine Kollegen erstellt habe
              </li>
              <li>
                <a href="//mariofink.github.io/farbenspiel/">Farbenspiel</a> –
                Kleiner Spielplatz zur Erzeugung von Farbschemata
              </li>
              <li>
                <a href="//github.com/mariofink">Mehr auf GitHub</a>
              </li>
            </ul>
          </p>
          <p>
            <s>Hin und wieder</s> … <s>Gelegentlich</s> … So gut wie nie
            schreibe ich über das, was ich tue: <Link to="/posts">Artikel</Link>
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

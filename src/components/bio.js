/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div>
      <p>
        <strong>{author}</strong> – Webentwickler aus Fulda
        <br />
        <a href={`//twitter.com/${social.twitter}`}>Folge mir auf Twitter</a>
        {` – `}
        <a href={`//github.com/${social.github}`}>Folge mir auf GitHub</a>
      </p>
      <p></p>
    </div>
  )
}

export default Bio

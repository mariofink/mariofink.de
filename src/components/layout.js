import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import MainNavigation from "../components/mainNavigation"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="site-title">
          <Link to={`/`}>{title}</Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="site-title">
          <Link to={`/`}>{title}</Link>
        </h3>
      )
    }
    return (
      <div className="📄">
        <header className="📄⬆️">{header}</header>
        <main>{children}</main>
        <footer className="📄⬇️">
          <Bio />
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </footer>
      </div>
    )
  }
}

export default Layout

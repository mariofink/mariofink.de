import React from "react"
import { Link } from "gatsby"

function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/posts`}>Artikel</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation

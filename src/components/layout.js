import React from "react"
import { css } from "@emotion/react"
import { graphql, Link, useStaticQuery } from "gatsby"

import { rhythm } from "../utils/typography"

function getSiteTitle() {
  return graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
}

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`float: right;`}>
        | About
      </Link>
      <Link 
        to={`/my-files/`} 
        css={css`float: right;`}>
        MyFiles | 
      </Link>
      {children}
    </div>
  )
}
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "./layout.css"

import { graphql, useStaticQuery } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "./header"
import PropTypes from "prop-types"
import React from "react"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import styled from "@emotion/styled"

library.add(fab, faEnvelope)

const Footer = styled.footer`
  height: 300px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer>
        <FontAwesomeIcon
          icon={["fab", "dribbble"]}
          style={{ color: "#000000", height: "50px", width: "50px" }}
        />
        <FontAwesomeIcon
          icon={["fab", "instagram"]}
          style={{ color: "#000000", height: "50px", width: "50px" }}
        />
        <FontAwesomeIcon
          icon={["fab", "medium-m"]}
          style={{ color: "#000000", height: "50px", width: "50px" }}
        />
        <FontAwesomeIcon
          icon={["fab", "linkedin-in"]}
          style={{ color: "#000000", height: "50px", width: "50px" }}
        />
        <FontAwesomeIcon
          icon={"envelope"}
          style={{ color: "#000000", height: "50px", width: "50px" }}
        />
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import Layout, { HeaderBox } from "../components/layout"
import { PRANA_CHALLENGE_TEXT, PRANA_SOLUTION_TEXT } from "../pages/index"
import { graphql, useStaticQuery } from "gatsby"

import ProjectSection from "../components/projectsection"
import React from "react"
import SEO from "../components/seo"

const Prana = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/prana-mockup-phone.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <HeaderBox />
      <ProjectSection
        challengeText={PRANA_CHALLENGE_TEXT}
        solutionText={PRANA_SOLUTION_TEXT}
        image={data.file.childImageSharp.fluid}
        title="Prana"
        route="/prana"
        reverse
        background="linear-gradient(135deg, #89BFD6 0%,#FFFFFF 100%)"
        imgBackground="#89BFD6"
        stack
      />
      <SEO title="Prana" />
    </Layout>
  )
}

export default Prana

import { EVOLVE_CHALLENGE_TEXT, EVOLVE_SOLUTION_TEXT } from "../pages/index"
import Layout, { HeaderBox } from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

import ProjectSection from "../components/projectsection"
import React from "react"
import SEO from "../components/seo"

const Evolve = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/macbook-mock-evolve.png" }) {
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
      <SEO title="Evolve" />
      <HeaderBox />
      <ProjectSection
        challengeText={EVOLVE_CHALLENGE_TEXT}
        solutionText={EVOLVE_SOLUTION_TEXT}
        image={data.file.childImageSharp.fluid}
        title="Evolve"
        route="/evolve"
        background="linear-gradient(-45deg,  #FC7B40 0%,#FFFFFF 100%)"
        imgBackground="#FC7B40"
        stack
        reverse
      />
    </Layout>
  )
}

export default Evolve

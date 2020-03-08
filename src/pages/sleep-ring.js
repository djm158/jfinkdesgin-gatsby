import Layout, { HeaderBox } from "../components/layout"
import {
  SLEEP_RING_CHALLENGE_TEXT,
  SLEEP_RING_SOLUTION_TEXT,
} from "../pages/index"
import { graphql, useStaticQuery } from "gatsby"

import ProjectSection from "../components/projectsection"
import React from "react"
import SEO from "../components/seo"

const SleepRing = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/sleep-ring.png" }) {
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
      <SEO title="Sleep Ring" />
      <HeaderBox />
      <ProjectSection
        challengeText={SLEEP_RING_CHALLENGE_TEXT}
        solutionText={SLEEP_RING_SOLUTION_TEXT}
        image={data.file.childImageSharp.fluid}
        title="Evolve"
        route="/evolve"
        background="linear-gradient(-45deg,  #FC7B40 0%,#FFFFFF 100%)"
        stack
        reverse
      />
    </Layout>
  )
}

export default SleepRing

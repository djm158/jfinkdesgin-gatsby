import Layout, { HeaderBox } from "../components/layout"
import {
  SLEEP_RING_CHALLENGE_TEXT,
  SLEEP_RING_SOLUTION_TEXT,
} from "../pages/index"
import { graphql, useStaticQuery } from "gatsby"

import CircleRow from "../components/circlerow"
import CircleText from "../components/circletext"
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
        background="linear-gradient(135deg,  #9CC0E7 0%,#FFFFFF 100%)"
        stack
        reverse
      />
      <CircleRow>
        <CircleText background="#9cc0ea" color="white">
          Interviews
        </CircleText>
        <CircleText background="#9cc0ea" color="white">
          Problem & “How Might We”
        </CircleText>
        <CircleText background="#9cc0ea" color="white">
          Product Opportunity
        </CircleText>
        <CircleText background="#9cc0ea" color="white">
          Product Design
        </CircleText>
      </CircleRow>
    </Layout>
  )
}

export default SleepRing

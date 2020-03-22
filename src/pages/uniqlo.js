import Layout, { HeaderBox } from "../components/layout"
import { UNIQLO_CHALLENGE_TEXT, UNIQLO_SOLUTION_TEXT } from "../pages/index"
import { graphql, useStaticQuery } from "gatsby"

import CircleRow from "../components/circlerow"
import CircleText from "../components/circletext"
import ProjectSection from "../components/projectsection"
import React from "react"
import SEO from "../components/seo"

const SleepRing = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/uniqlo-mockup-phone.png" }) {
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
        challengeText={UNIQLO_CHALLENGE_TEXT}
        solutionText={UNIQLO_SOLUTION_TEXT}
        image={data.file.childImageSharp.fluid}
        title="Uniqlo"
        route="/uniqlo"
        background="linear-gradient(135deg, #EC1E23 0%,#FFFFFF 100%)"
        imgBackground="#EC1E23"
        stack
        reverse
      />
      <CircleRow>
        <CircleText background="#ef1814" color="white">
          User Analysis
        </CircleText>
        <CircleText background="#ef1814" color="white">
          Task Analysis
        </CircleText>
        <CircleText background="#ef1814" color="white">
          Identify Bottlenecks
        </CircleText>
        <CircleText background="#ef1814" color="white">
          Specify Problem Area
        </CircleText>
        <CircleText background="#ef1814" color="white">
          Propose Redesign
        </CircleText>
      </CircleRow>
    </Layout>
  )
}

export default SleepRing

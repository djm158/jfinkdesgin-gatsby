import Layout, { HeaderBox } from "../components/layout"
import {
  UNIQLO_CHALLENGE_TEXT,
  UNIQLO_SOLUTION_TEXT,
} from "../pages/index"
import { graphql, useStaticQuery } from "gatsby"

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
        background="linear-gradient(180deg, #EC1E23 0%,#FFFFFF 100%)"
        imgBackground="#EC1E23"
        stack
        reverse
      />
    </Layout>
  )
}

export default SleepRing

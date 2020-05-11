import { EVOLVE_CHALLENGE_TEXT, EVOLVE_SOLUTION_TEXT } from "../pages/index"
import { graphql, useStaticQuery } from "gatsby"

import CircleRow from "../components/circlerow"
import CircleText from "../components/circletext"
import Layout from "../components/layout"
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
      <CircleRow>
        <CircleText background="#fe7b36" color="white">
          Discover & Define
        </CircleText>
        <CircleText background="#fe7b36" color="white">
          Problem & “How Might We”
        </CircleText>
        <CircleText background="#fe7b36" color="white">
          Identify Personas
        </CircleText>
        <CircleText background="#fe7b36" color="white">
          Current Workflow Diagram
        </CircleText>
        <CircleText background="#fe7b36" color="white">
          Wireframes
        </CircleText>
        <CircleText background="#fe7b36" color="white">
          UI Kit
        </CircleText>
        <CircleText background="#fe7b36" color="white">
          Hi-fidelity Prototypes
        </CircleText>
        <CircleText background="#fe7b36" color="white">
          Front-end Developed Prototype
        </CircleText>
      </CircleRow>
    </Layout>
  )
}

export default Evolve

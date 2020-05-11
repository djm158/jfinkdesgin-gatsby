import { ONEHUNDRED_CHALLENGE_TEXT, ONEHUNDRED_SOLUTION_TEXT } from "../pages/index"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import ProjectSection from "../components/projectsection"
import React from "react"
import SEO from "../components/seo"

const HundredUis = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/ui-100.png" }) {
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
      <SEO title="100 Uis" />
      <ProjectSection
        challengeText={ONEHUNDRED_CHALLENGE_TEXT}
        solutionText={ONEHUNDRED_SOLUTION_TEXT}
        image={data.file.childImageSharp.fluid}
        title="100 Uis"
        route="/100-uis"
        background="linear-gradient(135deg, #FEE157 0%,#FFFFFF 100%)"
        imgBackground="#FEE157"
        stack
        reverse
      />
    </Layout>
  )
}

export default HundredUis

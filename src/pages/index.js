import Layout from "../components/layout"
import ProjectSection from "../components/projectsection"
import React from "react"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const TOP_TEXT_POS = 20
const LEFT_TEXT_POS = 10

const Main = styled.div`
  height: 90vh;
`
const HeroText = styled.h1`
  font-size: 200px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0;
  position: relative;
  top: ${TOP_TEXT_POS}%;
  left: ${LEFT_TEXT_POS}%;
`

const SubText = styled.h2`
  font-size: 37px;
  margin-top: -10px;
  position: relative;
  top: ${TOP_TEXT_POS}%;
  left: calc(${LEFT_TEXT_POS}% + 5%);
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`

const PRANA_CHALLENGE_TEXT = `Using the Build-Measure-Learn design process,
                              create a prototype of a habit-forming application that
                              encourages better wellness decisions by Jefferson University
                              students by leveraging Nir Eyal’s Hooked Model.`

const PRANA_SOLUTION_TEXT = `Made for Jefferson students, Prana is a new way of on-campus
                             meditation. By transforming daily activities into gamified
                             meditation sessions, students will be able to find their
                             zen and connect with other students on their own terms. `

const EVOLVE_CHALLENGE_TEXT = `The resources offered by Career Services, such as one-on-one sessions,
                              career fair events, portfolio reviews, and classroom presentations/seminars,
                              do not reach graduate students in the same way as they reach undergraduates,
                              which reduces the probability of graduate students getting a job during and/or after graduation.`
                              
const EVOLVE_SOLUTION_TEXT = `Evolve is a new and improved job search site for Jefferson students with the purpose of increasing
                               the amount of students that apply and get hired through Career Services.`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main>
      <HeroText>Jamie</HeroText>
      <SubText>Let’s build something together.</SubText>
    </Main>
    <ProjectSection
      challengeText={PRANA_CHALLENGE_TEXT}
      solutionText={PRANA_SOLUTION_TEXT}
    />
    <ProjectSection
      challengeText={EVOLVE_CHALLENGE_TEXT}
      solutionText={EVOLVE_SOLUTION_TEXT}
      reverse
    />
  </Layout>
)

export default IndexPage

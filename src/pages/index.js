import { graphql, useStaticQuery } from "gatsby"

import { LandingColors } from "../components/landingcolors"
import Layout from "../components/layout"
import ProjectSection from "../components/projectsection"
import React from "react"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const TOP_TEXT_POS = 20
const LEFT_TEXT_POS = 10

const Main = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`
const HeroText = styled.h1`
  font-size: 200px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0;
  position: relative;
  top: ${TOP_TEXT_POS}%;
  left: ${LEFT_TEXT_POS}%;
  @media (max-width: 576px) {
    font-size: 80px;
  }
`

const SubText = styled.h2`
  font-size: 37px;
  margin-top: -10px;
  position: relative;
  top: ${TOP_TEXT_POS}%;
  left: calc(${LEFT_TEXT_POS}% + 5%);
  @media (max-width: 576px) {
    font-size: 24px;
    max-width: 325px;
    margin-top: -5px;
  }
`

export const PRANA_CHALLENGE_TEXT = `Using the Build-Measure-Learn design process,
                              create a prototype of a habit-forming application that
                              encourages better wellness decisions by Jefferson University
                              students by leveraging Nir Eyal’s Hooked Model.`

export const PRANA_SOLUTION_TEXT = `Made for Jefferson students, Prana is a new way of on-campus
                             meditation. By transforming daily activities into gamified
                             meditation sessions, students will be able to find their
                             zen and connect with other students on their own terms. `

export const EVOLVE_CHALLENGE_TEXT = `The resources offered by Career Services, such as one-on-one sessions,
                               career fair events, portfolio reviews, and classroom presentations/seminars,
                               do not reach graduate students in the same way as they reach undergraduates,
                               which reduces the probability of graduate students getting a job during and/or after graduation.`

export const EVOLVE_SOLUTION_TEXT = `Evolve is a new and improved job search site for Jefferson students with the purpose of increasing
                              the amount of students that apply and get hired through Career Services.`

export const SLEEP_RING_CHALLENGE_TEXT = `Identify a problem space around a specific two-hour time period.
                                   Brainstorm a product opportunity in response to the challenges happening at that time of day.`

export const SLEEP_RING_SOLUTION_TEXT = `Add a “Sleep Ring” to the Apple Watch to encourage individuals to get higher quality sleep through competitions and reminders.`

export const UNIQLO_CHALLENGE_TEXT = `Your company’s leadership team has identified spot or downturn in the performance of a particular Product/Service
                               and they’ve asked you to figure out what might be wrong and how they should fix it.
                               Outline the problem, including the Key Performance Indicators and put together an analysis and design proposal for
                               how you suggest they improve performance in that product area.`

export const UNIQLO_SOLUTION_TEXT = `A complete redesign of Uniqlo’s mobile app home page, focusing more on clear navigation and search bar access.`

export const ONEHUNDRED_CHALLENGE_TEXT = `Become a better designer! 100 days of UI helps me get creative in a structured way.`
export const ONEHUNDRED_SOLUTION_TEXT = `(Always) in progress.`

const findImage = (data, name) => {
  return data.allFile.edges.find(image => image.node.base === name)
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "home" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  // TODO: just fucking map over all the images, put all the text into a list with all the fucking data you need and just render that bullshit
  const { node: pranaImageSharp } = findImage(data, "prana-mockup-phone.png")
  const { node: evolveImageSharp } = findImage(data, "macbook-mock-evolve.png")
  const { node: sleepRingImageSharp } = findImage(data, "sleep-ring.png")
  const { node: uniqloImageSharp } = findImage(data, "uniqlo-mockup-phone.png")
  const { node: oneHundredImageSharp } = findImage(data, "ui-100.png")

  return (
    <Layout>
      <SEO title="Home" />
      <Main>
        <HeroText>Jamie</HeroText>
        <SubText>Let’s build something together.</SubText>
        <LandingColors />
      </Main>
      <ProjectSection
        challengeText={PRANA_CHALLENGE_TEXT}
        solutionText={PRANA_SOLUTION_TEXT}
        image={pranaImageSharp.childImageSharp.fluid}
        title="Prana"
        route="/prana"
        reverse
        background="linear-gradient(135deg, #89BFD6 0%,#FFFFFF 100%)"
        imgBackground="#89BFD6"
      />
      <ProjectSection
        challengeText={EVOLVE_CHALLENGE_TEXT}
        solutionText={EVOLVE_SOLUTION_TEXT}
        image={evolveImageSharp.childImageSharp.fluid}
        title="Evolve"
        route="/evolve"
        background="linear-gradient(-45deg, #FC7B40 0%,#FFFFFF 100%)"
        imgBackground="#FC7B40"
      />
      <ProjectSection
        challengeText={SLEEP_RING_CHALLENGE_TEXT}
        solutionText={SLEEP_RING_SOLUTION_TEXT}
        image={sleepRingImageSharp.childImageSharp.fluid}
        reverse
        title="Sleep Ring"
        route="/sleep-ring"
        imgBackground="#9CC0E7"
        background="linear-gradient(135deg, #9CC0E7 0%,#FFFFFF 100%)"
      />
      <ProjectSection
        challengeText={UNIQLO_CHALLENGE_TEXT}
        solutionText={UNIQLO_SOLUTION_TEXT}
        image={uniqloImageSharp.childImageSharp.fluid}
        background="linear-gradient(-45deg, #EC1E23 0%,#FFFFFF 100%)"
        imgBackground="#EC1E23"
        title="Uniqlo"
        route="/uniqlo"
      />
      <ProjectSection
        challengeText={ONEHUNDRED_CHALLENGE_TEXT}
        solutionText={ONEHUNDRED_SOLUTION_TEXT}
        image={oneHundredImageSharp.childImageSharp.fluid}
        background="linear-gradient(135deg, #FEE157 0%,#FFFFFF 100%)"
        imgBackground="#FEE157"
        title="100 UIs"
        route="/100-uis"
        reverse
      />
    </Layout>
  )
}

export default IndexPage

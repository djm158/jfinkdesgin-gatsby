import { Box, Flex, Text } from "rebass"
import { Tiles } from "@rebass/layout"
import { PRANA_CHALLENGE_TEXT, PRANA_SOLUTION_TEXT } from "../pages/index"
import { graphql, useStaticQuery } from "gatsby"

import CircleRow from "../components/circlerow"
import CircleText from "../components/circletext"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ProjectSection from "../components/projectsection"
import React from "react"
import SEO from "../components/seo"
import styled from "@emotion/styled"

// TODO: figure this out
const ResponsiveRow = styled(Flex)`
  @media (max-width: 576px) {
    flex-direction: column;
  }
`

const UnstyledList = styled.ul`
  list-style: none;

  li {
    margin: 0;
    padding: 0;
  }
`

const GridBox = props => (
  <Box height={300} width={255} pl={10} pt={10} {...props}>
    {props.children}
  </Box>
)

const PageContainer = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
`

const Prana = () => {
  const data = useStaticQuery(graphql`
    query {
      mockup: file(relativePath: { eq: "home/prana-mockup-phone.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      accelerator: file(relativePath: { eq: "prana/accelerator.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      storyboard: file(relativePath: { eq: "prana/storyboard.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 644, maxHeight: 1006) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wireframes: allFile(
        filter: { relativeDirectory: { eq: "prana/wireframes" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 211) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  console.log(data.wireframes.edges)

  return (
    <Layout>
      <SEO title="Prana" />
      <ProjectSection
        challengeText={PRANA_CHALLENGE_TEXT}
        solutionText={PRANA_SOLUTION_TEXT}
        image={data.mockup.childImageSharp.fluid}
        title="Prana"
        route="/prana"
        reverse
        background="linear-gradient(135deg, #89BFD6 0%,#FFFFFF 100%)"
        imgBackground="#89BFD6"
        stack
      />
      <PageContainer>
        <CircleRow>
          <CircleText background="#83bad7" color="white">
            Brainstorm
          </CircleText>
          <CircleText background="#83bad7" color="white">
            Ideation Poster
          </CircleText>
          <CircleText background="#83bad7" color="white">
            Scope & Structure
          </CircleText>
          <CircleText background="#83bad7" color="white">
            Wireframes
          </CircleText>
          <CircleText background="#83bad7" color="white">
            Mood Board
          </CircleText>
          <CircleText background="#83bad7" color="white">
            Desirability Assessment
          </CircleText>
          <CircleText background="#83bad7" color="white">
            Hi-fidelity Prototypes
          </CircleText>
        </CircleRow>
        <ResponsiveRow justifyContent="center" alignItems="center">
          <Box maxWidth={400} p={["1rem", "2rem"]}>
            <Text fontWeight="bold" mb="1rem">
              Identifying the Problem
            </Text>
            <Text>
              My main purpose for this project was to attract and retain
              students to a mobile application that would benefit their
              experience at Thomas Jefferson University. To get in the right
              mindset, I brainstormed using the “Accelerator” game. Each
              Accelerator card had an individual or successful business and a
              description. I matched each card with one of the four phases of
              Nir Eyal’s Hooked Model: (Trigger, Action, Variable Reward, and
              Investment). This brainstorm got me thinking — how can I formulate
              a solution that will act as a Hook. In other words, how can I
              solve Jefferson’s problem in an engaging and capturing way?
            </Text>
          </Box>
          <Box maxWidth={700} maxHeight={500} flexGrow={1} minWidth={350}>
            <Img
              fluid={data.accelerator.childImageSharp.fluid}
              alt={`Accelerator diagram`}
            />
          </Box>
        </ResponsiveRow>
        <Text textAlign="center" fontWeight="bold" fontSize={24} mb="2rem">
          Problem Statement (based on given data from Thomas Jefferson
          University)
        </Text>
        <Box
          backgroundColor="#81bad9"
          boxShadow="6px 6px 15px 0 rgba(0, 0, 0, 0.16)"
          m="auto"
          maxWidth={800}
          p="1rem"
        >
          <Text color="#ffffff">
            Freshman, Sophomore, and new (in their first or second year)
            students at Thomas Jefferson University are feeling disconnected
            from their peers and are lacking an outlet to destress from school.
            While the university offers fitness classes, group activities and
            other means of connection/relaxation, there is no platform allowing
            the students to take the situation into their own hands.{" "}
          </Text>
        </Box>
        <ResponsiveRow justifyContent="center" alignItems="center">
          <Box width={1 / 2} justifyContent="center">
            <Box maxWidth={644}>
              <Img
                fluid={data.storyboard.childImageSharp.fluid}
                alt={`Prana Storyboard`}
              />
            </Box>
          </Box>
          <Box maxWidth={600} width={1 / 2} p="1rem">
            <Box>
              <Text fontWeight="bold" mb="1rem">
                Solution Draft & Storyboard (left)
              </Text>
              <Text mb="1rem">
                A mobile application that integrates meditation into user’s
                daily activities and that connect users (students) with other
                users. Prana, a new way of on-campus meditation, presents the
                story of a stressed-out student at Thomas Jefferson University.
              </Text>
              <Text fontWeight="bold" mb="1rem">
                Solution Refinement: MoSCoW Method (below)
              </Text>
              <Text>
                Which features should be prioritized? What will the scope cover
                and, equally important, not cover? By utilizing the MoSCoW
                Method, I was able to scope out my solution.
              </Text>
            </Box>
            {/* TODO REDO IN CSS GRID */}
            <Flex>
              <Box>
                <GridBox backgroundColor="#81bad9">
                  <Flex>
                    <Text fontWeight="bold">Must</Text>
                    <Text pl="5px">Have</Text>
                  </Flex>
                  <UnstyledList>
                    <li>- Welcome screen</li>
                    <li>- Onboarding tutorial</li>
                    <li>- Location services</li>
                    <li>- Audio meditation</li>
                    <li>- Playing screen</li>
                    <li>- Community portal</li>
                    <li>- Message portal</li>
                    <li>- Settings</li>
                    <li>- FAQs</li>
                    <li>- Notifications</li>
                  </UnstyledList>
                </GridBox>
                <GridBox backgroundColor="#a0deff">
                  <Flex>
                    <Text fontWeight="bold">Could</Text>
                    <Text pl="5px">Have</Text>
                  </Flex>
                  <UnstyledList>
                    <li>- Post-meditation Rating</li>
                    <li>- Recommended Classes</li>
                    <li>- Streaks and other awards</li>
                    <li>- Feelings chart/web</li>
                    <li>- Day/night mode</li>
                  </UnstyledList>
                </GridBox>
              </Box>
              <Box>
                <GridBox backgroundColor="#8cc8e8">
                  <Flex>
                    <Text fontWeight="bold">Should</Text>
                    <Text pl="5px">Have</Text>
                  </Flex>
                  <UnstyledList>
                    <li>- Filters</li>
                    <li>- Trainer</li>
                    <li>- Time of Day</li>
                    <li>- Length</li>
                    <li>- History</li>
                    <li>- Emotional Progress Indicator</li>
                    <li>- Option to opt-out of community sharing</li>
                  </UnstyledList>
                </GridBox>
                <GridBox backgroundColor="#c3eaff">
                  <Flex>
                    <Text fontWeight="bold">Won't</Text>
                    <Text pl="5px">Have</Text>
                  </Flex>
                  <UnstyledList>
                    <li>- Link to social media</li>
                    <li>- Competitive ratings with other users</li>
                  </UnstyledList>
                </GridBox>
              </Box>
            </Flex>
          </Box>
        </ResponsiveRow>
        <Text>Site Map</Text>
        <Text>
          Based on the above brainstorming and layout, the following sitemap was
          created.
        </Text>
        <Text>
          Wireframes (annotated): More at
          https://xd.adobe.com/view/61120142-37ab-4b4e-7a63-a21e06a73830-1723/
        </Text>
        <Tiles width={211}>
          {data.wireframes.edges.map(node => {
            return <Img fluid={node.node.childImageSharp.fluid} />
          })}
        </Tiles>
        <Text>
          Mood Boards Initially, I identified five boards of interest: Natural,
          Warm, Safe, Soft, and Minimalist. Each of the boards were intended to
          create a calm feeling within the user. If this was going to be a
          meditation application with the goal of de-stressing students, the
          color and overall design needed to be relaxing.
        </Text>
      </PageContainer>
    </Layout>
  )
}

export default Prana

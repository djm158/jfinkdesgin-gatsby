import React from "react"
import styled from "@emotion/styled"

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  order: ${props => (props.reverse ? 1 : 0)};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
  max-width: 100%;
  margin: 0 auto;
  background: ${props => props.background};

  @media (max-width: 576px) {
    ${Column}:first-child {
      display: none;
    }
  }
`

const Text = styled.p`
  max-width: 600px;
  font-size: 16px;
`

const Heading = styled.h2`
  margin-bottom: 0.5rem;
`

const ProjectSection = ({
  challengeText,
  solutionText,
  image,
  background,
  reverse = false,
}) => (
  <Row background={background}>
    <Column reverse={reverse}>
      <Heading>Challenge</Heading>
      <Text>{challengeText}</Text>
      <Heading>Solution</Heading>
      <Text>{solutionText}</Text>
    </Column>
    <Column reverse={!reverse}>{image}</Column>
  </Row>
)

export default ProjectSection

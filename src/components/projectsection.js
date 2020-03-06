import React from "react"
import styled from "@emotion/styled"

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  order: ${props => (props.reverse ? 1 : 0)};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Text = styled.p`
  max-width: 600px;
`

const ProjectSection = ({ challengeText, solutionText, image, reverse = false }) => (
  <Row>
    <Column reverse={reverse}>
      <h1>Challenge</h1>
      <Text>{challengeText}</Text>
      <h1>Solution</h1>
      <Text>{solutionText}</Text>
    </Column>
    <Column reverse={!reverse}>{image}</Column>
  </Row>
)

export default ProjectSection

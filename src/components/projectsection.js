import Img from "gatsby-image" // to take image data and render it
import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  order: ${props => (props.reverse ? 1 : 0)};
  width: 100%;
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
  min-height: 400px;

  @media (max-width: 576px) {
    flex-direction: ${props => props.stack ? `column` : `row`};
    ${Column}:first-of-type {
      display: none;
      display: ${props => props.stack ? `flex` : `none`};
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

const ContentDetails = styled.div`
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  top: 80%;

  h3 {
    color: #fff;
  }
`

const StyledImg = styled(Img)`
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
`

const Content = styled.div`
  position: relative;
  width: 90%;
  max-width: 400px;
  overflow: hidden;
  margin: auto;

  &:hover {
    ${ContentDetails} {
      top: 50%;
      left: 50%;
      opacity: 1;
    }
    ${StyledImg} {
      filter: blur(5px);
    }
  }
`

const ProjectSection = props => {
  const {
    challengeText,
    solutionText,
    image,
    background,
    route,
    title,
    reverse,
    stack
  } = props
  return (
    <Row background={background} stack={stack}>
      <Column reverse={reverse}>
        <Heading>Challenge</Heading>
        <Text>{challengeText}</Text>
        <Heading>Solution</Heading>
        <Text>{solutionText}</Text>
      </Column>
      <Column reverse={!reverse}>
        {" "}
        <Content>
          <Link to={route}>
            <StyledImg fluid={image} alt={`${title} App Image`} />
            <ContentDetails>
              <h3>{title}</h3>
            </ContentDetails>
          </Link>
        </Content>
      </Column>
    </Row>
  )
}

export default ProjectSection

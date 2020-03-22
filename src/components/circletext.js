import React from "react"
import styled from "@emotion/styled"

const CircleContainer = styled.div`
  height: 130px;
  width: 130px;

  @media (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`

const Circle = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  /* https://stackoverflow.com/questions/7057714/css3-circle-with-text-wrap */
  padding: 14.65%;
  font-size: 18px;
  background: ${props => props.background};
  color: ${props => props.color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`

const CircleText = ({ background, color, children }) => {
  return (
    <CircleContainer>
      <Circle color={color} background={background}>
        {children}
      </Circle>
    </CircleContainer>
  )
}

export default CircleText

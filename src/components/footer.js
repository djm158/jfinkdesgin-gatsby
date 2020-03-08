import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "@emotion/styled"

const StyledIcon = styled(FontAwesomeIcon)`
  color: #000;
  height: 100%;
  width: 100%;
`

const StyledFooter = styled.footer`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > a ${StyledIcon} {
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: center;
    height: 50px;
    width: 50px;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
      transition: opacity 0.3s ease;
    }
    @media (max-width: 576px) {
      height: 30px;
      width: 30px;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
  @media (max-width: 576px) {
    height: 100px;
  }
`

const Footer = () => (
  <StyledFooter>
    <a href="https://dribbble.com/jamiefink">
      <StyledIcon icon={["fab", "dribbble"]} />
    </a>
    <a href="https://www.instagram.com/jfinkphoto/?hl=en">
      <StyledIcon icon={["fab", "instagram"]} />
    </a>
    <a href="https://medium.com/@jamiefinkelstein1">
      <StyledIcon icon={["fab", "medium-m"]} />
    </a>
    <a href="https://www.linkedin.com/in/jamiefinkelstein/">
      <StyledIcon icon={["fab", "linkedin-in"]} />
    </a>
    <a href="mailto:jamiefinkelstein1@gmail.com">
      <StyledIcon icon={"envelope"} />
    </a>
  </StyledFooter>
)

export default Footer;
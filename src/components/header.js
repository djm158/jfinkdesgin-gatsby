import { Box, Flex } from "rebass"
import React, { useState } from "react"

import { Link } from "gatsby"
import styled from "@emotion/styled"

const HeaderLink = styled(Link, {
  shouldForwardProp: prop => true,
})(() => ({
  textDecoration: `none`,
  color: `#000000`,
  fontSize: `24px`,
  margin: `0 1rem`,
}))

const DropdownContent = styled(Box)`
  position: absolute;
  background: #ffffff;
  z-index: 1;
  display: none;
  margin-left: 1rem;

  & > ${HeaderLink} {
    margin: 0;
    padding: 0.2rem 0.2rem;
    &:hover {
      background: #ddd;
      transition: 0.2s ease;
    }
  }
`

const Dropdown = styled(Box)`
  &:hover {
    ${DropdownContent} {
      flex-direction: column;
      display: flex;
    }
  }
`

const Line = styled.span`
  width: 30px;
  height: 4px;
  background-color: #000;
  display: block;
  margin: 5px auto;
`

const Hamburger = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: block;
    &:hover {
      cursor: pointer;
    }
  }
`
const Links = styled(Box)`
  display: flex;
  @media (max-width: 576px) {
    display: none;
  }
`

const StyledHeader = styled.header`
  background: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`

const Overlay = styled.div`
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.open ? 1 : 0)};
  visibility: ${props => (props.open ? "visible" : "hidden")};
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
  z-index: 10;
`

const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    text-transform: capitalize;
    font-size: 36px;
    flex-grow: 1;
    border-bottom: 1px solid #ddd;
    &:hover {
      background: #ddd;
      transition: all 0.3s ease;
    }
  }
`

const HeaderAnchor = HeaderLink.withComponent("a")

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <StyledHeader>
      <Overlay open={mobileMenuOpen}>
        <OverlayContainer>
          <HeaderLink to="/" onClick={() => setMobileMenuOpen(false)}>
            Home
          </HeaderLink>
          <HeaderLink to="/prana" onClick={() => setMobileMenuOpen(false)}>
            Prana
          </HeaderLink>
          <HeaderLink to="/evolve" onClick={() => setMobileMenuOpen(false)}>
            Evolve
          </HeaderLink>
          <HeaderLink to="/sleep-ring" onClick={() => setMobileMenuOpen(false)}>
            Sleep Ring
          </HeaderLink>
          <HeaderLink to="/uniqlo" onClick={() => setMobileMenuOpen(false)}>
            Uniqlo
          </HeaderLink>
          <HeaderLink to="/100-uis" onClick={() => setMobileMenuOpen(false)}>
            100 Uis
          </HeaderLink>
          <HeaderAnchor
            href="https://drive.google.com/file/d/1IQbBIulfYcqN-fOq3o_agxkMMHfxnHPG/view"
            onClick={() => setMobileMenuOpen(false)}
          >
            Resume
          </HeaderAnchor>
        </OverlayContainer>
      </Overlay>
      <nav>
        <Flex p={3} alignItems="center">
          <HeaderLink to="/">Jamie</HeaderLink>
          <Box mx="auto" />
          <Links>
            <Box>
              <Dropdown>
                <HeaderLink to="/">Work</HeaderLink>
                <DropdownContent>
                  <HeaderLink to="/prana">Prana</HeaderLink>
                  <HeaderLink to="/evolve">Evolve</HeaderLink>
                  <HeaderLink to="/sleep-ring">Sleep Ring</HeaderLink>
                  <HeaderLink to="/uniqlo">Uniqlo</HeaderLink>
                  <HeaderLink to="/100-uis">100 UIs</HeaderLink>
                </DropdownContent>
              </Dropdown>
            </Box>
            <HeaderAnchor href="https://drive.google.com/file/d/1IQbBIulfYcqN-fOq3o_agxkMMHfxnHPG/view">
              Resume
            </HeaderAnchor>
            <HeaderAnchor href="mailto:jamiefinkelstein1@gmail.com">
              Contact
            </HeaderAnchor>
          </Links>
          <Hamburger onClick={() => setMobileMenuOpen(true)}>
            <Line />
            <Line />
            <Line />
          </Hamburger>
        </Flex>
      </nav>
    </StyledHeader>
  )
}

export default Header

import { Box, Flex } from "rebass"

import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: 24px;
  margin: 0 1rem;
`

const DropdownContent = styled(Box)`
  display: none;
  position: absolute;
  background: #ffffff;
  z-index: 1;

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
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
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

const Header = () => (
  <StyledHeader>
    <nav>
      <Flex p={3} alignItems="center">
        <HeaderLink to="/">Jamie</HeaderLink>
        <Box mx="auto" />
        <Links>
          <Box>
            <Dropdown>
              <HeaderLink as="div" to="/">Work</HeaderLink>
              <DropdownContent>
                <HeaderLink to="/prana">Prana</HeaderLink>
                <HeaderLink to="/evolve">Evolve</HeaderLink>
                <HeaderLink to="/sleep-ring">Sleep Ring</HeaderLink>
                <HeaderLink to="/uniqlo">Uniqlo</HeaderLink>
                <HeaderLink to="/100-uis">100 UIs</HeaderLink>
              </DropdownContent>
            </Dropdown>
          </Box>
          <HeaderLink to="/resume">Resume</HeaderLink>
          <HeaderLink to="/contact">Contact</HeaderLink>
        </Links>
        <Hamburger>
          <Line />
          <Line />
          <Line />
        </Hamburger>
      </Flex>
    </nav>
  </StyledHeader>
)

export default Header

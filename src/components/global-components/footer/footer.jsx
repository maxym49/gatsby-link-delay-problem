import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import menuData from "../../../static/variables/menu-data"

const FooterWrapper = styled.footer`
  display: flex;
  background: #0d0d0d;
  min-height: 300px;
  padding: 50px;
  justify-content: space-evenly;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  h5 {
    color: #ffffff;
    font-family: "Lato", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 0.5em;
  }
  @media screen and (max-width: 1000px) {
    margin: 20px 0;
  }
`

const linkStyle = css`
  font-family: "Palanquin", sans-serif;
  font-size: 14px;
  color: #b8b8b8;
`

const StyledLink = styled(Link)`
  ${linkStyle};
  text-decoration: none;
`

const StyledText = styled.p`
  ${linkStyle};
`

const ExternalLink = styled.a`
  ${linkStyle};
  text-decoration: none;
`

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Column>
          <h5>Menu</h5>
          {menuData.map(({ link, title }) => (
            <StyledLink key={link} to={link}>
              {title}
            </StyledLink>
          ))}
        </Column>
        <Column>
          <h5>Privacy</h5>
          <StyledLink to="/privacy">Privacy</StyledLink>
          <StyledLink to="/privacy">Cookies</StyledLink>
          <StyledText>© 2020 App</StyledText>
        </Column>
        <Column>
          <h5>Contact</h5>
          <ExternalLink href="tel:+48800702020">12 800 70 20 20</ExternalLink>
          <ExternalLink href="mailto:">my@email.com</ExternalLink>
        </Column>
        <Column>
          <h5>Address</h5>
          <StyledText>
            Company
            <br />
            Street
            <br />
            City
            <br />
          </StyledText>
        </Column>
        <Column>
          <h5>Social media</h5>
          <ExternalLink href="https://linkedin.com">LinkedIn</ExternalLink>
        </Column>
      </FooterWrapper>
    </>
  )
}
export default Footer

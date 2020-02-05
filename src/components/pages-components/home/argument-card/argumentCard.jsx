import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Paragraph from "../../../global-components/texts/paragraph/paragraph"


const CardContainer = styled.div`
  width: 100%;
  max-width: 500px;
  align-self: stretch;
  display: flex;
  background: blue;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('${props => props.backgroundImage ? props.backgroundImage : ""}');
  background-size: cover;
  min-height: 600px;
  padding: 50px;
  @media screen and (max-width: 900px) {
     align-self: center;
     margin: 0 auto 20px; 
  }
`

const linkStyle = css`
  font-family: "Montserrat", sans-serif;
  font-size: .7em;
  color: #CF2E3B;
  text-decoration: none;
  align-self: flex-end;
`

const StyledLink = styled(Link)`
 ${linkStyle}
`

const ExternalLink = styled.a`
  text-decoration: none;
  ${linkStyle}
`

const ArgumentCard = ({ src, alt, linkTo, children, btnText, backgroundImage, external }) => {
  return <>
    <CardContainer
      data-aos="fade-up"
      data-aos-offset="400"
      data-aos-delay="0"
      data-aos-duration="300"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
      backgroundImage={backgroundImage}>
      <img src={src} alt={alt}/>
      <div>
        <Paragraph>
          {children}
        </Paragraph>
      </div>
      {!external ? (
        <StyledLink to={linkTo}>{btnText}</StyledLink>
      ) : (
        <ExternalLink href={linkTo}>{btnText}</ExternalLink>
      )}
    </CardContainer>
  </>
}

ArgumentCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
  backgroundImage: PropTypes.string,
  external: PropTypes.bool,
}

ArgumentCard.defaultProps = {
  text: "",
  btnText: "click",
  backgroundImage: "",
  external: false,
}

export default ArgumentCard
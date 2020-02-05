import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import SecondaryButton from "../../../global-components/buttons/secondary/secondaryBtn"
import "./card.scss"
import { Link } from "gatsby"
import TransitionRedirect from "../../../interactive-components/redirect/transitionRedirect"

const Header = styled.h5`
  font-family: "Montserrat", sans-serif;
  color: #2b2b2b;
  max-width: 200px;
  font-weight: 600;
  margin: 0;
  font-size: 1.4em;
  line-height: 1.2em;
  text-align: center;
  @media screen and (max-width: 750px) {
    margin-bottom: 8px;
  }
`

const CardContainer = styled.div`
  width: 90%;
  max-width: 300px;
  align-self: stretch;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  box-shadow: ${props =>
    props.isTheBest
      ? "0 3px 30px rgba(238, 0, 0, .17)"
      : "0 3px 12px rgba(0, 0, 0, .02)"};
  padding: 50px 25px;
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  @media screen and (max-width: 750px) {
    align-self: center;
    margin-bottom: 20px;
  }
`

const Card = ({ price, title, backgroundColor, isTheBest, style, id }) => {
  const [redirect, setRedirect] = useState(false)
  const [link, setLink] = useState("/")
  const handleRedirect = url => {
    setLink(url)
    setRedirect(!redirect)
  }
  return (
    <>
      <CardContainer
        style={style}
        isTheBest={isTheBest}
        backgroundColor={backgroundColor}
        className="card-container"
      >
        <Header>{title}</Header>
        <div className="price-wrapper">
          <div>
            <span>from</span>
            <span>$</span>
            <h5>{price}</h5>
          </div>
          <p>per hour</p>
        </div>
        <SecondaryButton noMargin onClick={() => handleRedirect("/contact")}>
          buy package
        </SecondaryButton>
        <SecondaryButton
          noMargin
          background={"#fff"}
          color="#1C3144"
          onClick={() => handleRedirect(`/offer/#${id}`)}
        >
          more information
        </SecondaryButton>
        {redirect ? <TransitionRedirect id="sendCv" linkTo={link} /> : null}
      </CardContainer>
    </>
  )
}

Card.propTypes = {
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  isTheBest: PropTypes.bool,
  style: PropTypes.object,
}

Card.defaultProps = {
  backgroundColor: "",
  isTheBest: false,
  style: {},
}

export default Card

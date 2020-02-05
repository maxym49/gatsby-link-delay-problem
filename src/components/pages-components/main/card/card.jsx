import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./card.module.scss"
import CardUppercaseHeader from "../../../global-components/headers/card-uppercase-header/cardUppercaseHeader"
import TransitionRedirect from "../../../interactive-components/redirect/transitionRedirect"
import { externalRedirectTo } from "../../../../static/functions/redirect"

const Card = ({ src, title, linkTo, isExternal }) => {
  const [redirect, setRedirect] = useState(false)

  return (
    <>
      {isExternal ? (
        <a
          className={styles.wrapper}
          href={linkTo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width="300" src={src} alt={title} />
          <CardUppercaseHeader>
            App
            <br />
            {title}
          </CardUppercaseHeader>
        </a>
      ) : (
        <button
          onClick={() => setRedirect(!redirect)}
          className={styles.wrapper}
        >
          <img width="300" src={src} alt={title} />
          <CardUppercaseHeader>
            App
            <br />
            {title}
          </CardUppercaseHeader>
          {redirect && !isExternal ? (
            <TransitionRedirect id={title} linkTo={linkTo} />
          ) : null}
        </button>
      )}
    </>
  )
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
}

Card.defaultProps = {
  isExternal: false,
}

export default Card

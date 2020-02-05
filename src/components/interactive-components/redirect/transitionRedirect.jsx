import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { redirectToWithTransition } from "../../../static/functions/redirect"

const TransitionRedirect = ({ linkTo, id }) => {
  return (
    <>
      <div style={{ display: "none" }}>
        <AniLink
          id={id}
          to={linkTo}
          paintDrip
          direction="up"
          duration={1}
          hex="#DE4756"
        />
        {redirectToWithTransition(id)}
      </div>
    </>
  )
}

TransitionRedirect.propTypes = {
  linkTo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default TransitionRedirect

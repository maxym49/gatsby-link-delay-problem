import React from "react"
import { Helmet } from "react-helmet"
import SEO from "./seo"
import Notifications from "react-notify-toast"
import "../styles/global.scss"

const Head = ({ children, title }) => {
  return (
    <>
      <SEO title={title}/>
      <Helmet>
        {children}
        <meta charSet="utf-8"/>
        <title>{title}</title>
      </Helmet>
      <Notifications options={{ zIndex: 200 }}/>
    </>
  )
}

export default Head
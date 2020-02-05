import React from "react"
import "../components/layout.css"
import SEO from "../components/seo"
import Body from "../components/body"
import styled from "styled-components"
import Head from "../components/head"
import MainHeader from "../components/global-components/headers/main-header/header"
import Paragraph from "../components/global-components/texts/paragraph/paragraph"
import { Link } from "gatsby"


const NotFoundWrapper = styled.div`
  background: #050115;
  display: flex;
  padding: 0;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  h1 {
    color: #f7fbe7;
    font-size: 6em;
    align-self: center;
  }
  a {
    text-decoration: none;
    text-align: right;
  }
  @media screen and (max-width: 600px) {
  padding: 50px;
  h1 {
    text-align: center;
  }
  }
`

const NotFoundPage = () => (
  <>
    <Head title="404" />
    <Body>
      <SEO title="404" />
      <NotFoundWrapper>
        <div>
          <MainHeader>404 - the end of the world</MainHeader>
          <Link to="/">
            <Paragraph color="#cc0146">This page doesn't exsist<br /><strong>Click</strong> to back</Paragraph>
          </Link>
        </div>
      </NotFoundWrapper>
    </Body>
  </>
)

export default NotFoundPage

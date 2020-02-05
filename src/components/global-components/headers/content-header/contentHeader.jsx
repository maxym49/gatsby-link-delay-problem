import React from "react"
import styled from "styled-components"

const Header = styled.h3`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  color: #2d2d2d;
  font-size: 1.6em;
  position: relative;
  margin-top: 10px;
  &:before {
    content: "";
    position: absolute;
    width: 60%;
    max-width: 100px;
    height: 6px;
    background: #cf2e3b;
    top: -10px;
  }
  @media screen and (max-width: 750px) {
    font-size: 1.2em;
    margin-bottom: 8px;
  }
`
const ContentHeader = ({ children }) => <Header
  data-aos="fade-up"
  data-aos-offset="100"
  data-aos-delay="0"
  data-aos-duration="400"
  data-aos-easing="ease-in-out"
  data-aos-once="false"
  data-aos-anchor-placement="top-bottom"
>{children}</Header>

export default ContentHeader

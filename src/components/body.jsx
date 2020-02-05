import styled from "styled-components"
import React, { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';


const BG = styled.div`
  background: #fefefe;
`

const Body = ({children}) => {
  useEffect(() => {
    AOS.init();
  })
  return <BG>{children}</BG>
}

export default Body

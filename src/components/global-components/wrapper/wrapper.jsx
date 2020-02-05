import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding: ${props => (props.noPadding ? "0" : "0 50px")};
  min-height: ${props => (props.fullPage ? "100vh" : "unset")};
  flex-direction: ${props => (props.vertical ? "column" : "row")};
  @media screen and (max-width: 500px) {
    min-height: unset;
  }
  @media screen and (max-width: 500px) {
    padding: ${props => (props.noPadding ? "0" : "0 30px")};
  }
`

export default Wrapper

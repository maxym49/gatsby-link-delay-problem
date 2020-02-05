import styled from "styled-components"

const Col50 = styled.div`
  display: flex;
  width: 50%;
  padding: 0 50px;
  flex-direction: ${props => (props.vertical ? "column" : "row")};
  align-items: ${props => (props.vertical ? "flex-start" : "center")};
  justify-content: ${props => (props.vertical ? "center" : "flex-start")};
  @media screen and (max-width: 1054px) {
    width: 100%;
  }
`

export default Col50

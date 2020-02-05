import styled from "styled-components"

const Col30 = styled.div`
  display: flex;
  width: 30%;
  padding: 0 50px;
  flex-direction: ${props => (props.vertical ? "column" : "row")};
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1054px) {
    width: 100%;
  }
`

export default Col30

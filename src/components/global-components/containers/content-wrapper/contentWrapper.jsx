import styled from "styled-components"

const ContentWrapper = styled.div`
  display: flex;
  max-width: 600px;
  flex-direction: ${props => (props.vertical ? "column" : "row")};
  align-items: ${props => (props.vertical ? "flex-start" : "center")};
  justify-content: ${props => (props.vertical ? "center" : "flex-start")};
`

export default ContentWrapper

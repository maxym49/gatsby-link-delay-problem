import styled from "styled-components"

const Paragraph = styled.p`
  color: ${props => (props.color ? props.color : "#363636")};
  font-family: "Palanquin", sans-serif;
  @media screen and (max-width: 750px) {
    font-size: 0.9em;
    line-height: 1.4em;
  }
`

export default Paragraph

import styled from "styled-components"

const SecondaryButton = styled.button`
  color: ${props => (props.color ? props.color : "#FE2D43")};
  margin: ${props => (props.noMargin ? "0" : "25px 0 0")};
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85em;
  border: none;
  background: ${props => (props.background ? props.background  : "#FCFCFC")};
  outline: none;
  cursor: pointer;
  min-width: 180px;
  height: 50px;
  transition: 0.15s ease-in-out all;
  &:hover {
  transform: scale(.9);
    opacity: 0.8;
  }
`

export default SecondaryButton

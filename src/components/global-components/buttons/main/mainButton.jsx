import styled from "styled-components"

const MainButton = styled.button`
  color: ${props => (props.color ? props.color : "#FFFFFF")};
  margin: ${props => (props.noMargin ? "0" : "25px 0 0")};
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85em;
  border: none;
  background: #cf2e3b;
  outline: none;
  cursor: pointer;
  min-width: 180px;
  height: 50px;
  align-self: flex-end;
  position: relative;
  transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  p {
    margin: -7px 0 0 0;
    transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: -7px;
    top: -7px;
    border: 3px solid #1c3144;
    transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  }
  &:hover {
    opacity: 0.98;
    p {
      transform: translateY(4px);
    }
  }
  &:hover:before {
     {
      transform: translate(7px, 7px);
    }
  }
`

const SmallMainButton = styled.button`
  color: ${props => (props.color ? props.color : "#FFFFFF")};
  margin: ${props => (props.noMargin ? "0" : "25px 0 0")};
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.65em;
  border: none;
  background: #cf2e3b;
  outline: none;
  cursor: pointer;
  min-width: 130px;
  height: 40px;
  align-self: flex-end;
  position: relative;
  transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  p {
    margin: -5px 0 0 0;
    transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: -5px;
    top: -5px;
    border: 2px solid #1c3144;
    transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  }
  &:hover {
    opacity: 0.98;
    p {
      transform: translateY(4px);
    }
  }
  &:hover:before {
     {
      transform: translate(5px, 5px);
    }
  }
`


export { MainButton, SmallMainButton }

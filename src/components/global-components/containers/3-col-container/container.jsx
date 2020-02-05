import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: fit-content(100%) fit-content(100%) fit-content(100%);
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 862px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`
export default Container

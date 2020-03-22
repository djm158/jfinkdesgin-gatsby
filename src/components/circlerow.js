import styled from "@emotion/styled"

const CircleRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    margin: 1rem;
  }

  @media (max-width: 576px) {
    justify-content: center;
    & > * {
      margin: 0.5rem;
    }
  }
`

export default CircleRow;
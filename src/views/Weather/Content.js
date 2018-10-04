import styled from 'styled-components'

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;

  margin-top: 1.25em;

  @media screen and (min-width: 468px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default Content

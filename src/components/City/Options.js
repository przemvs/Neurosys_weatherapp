import styled from 'styled-components'

const Options = styled.div`
  display: flex;
  align-items: center;
`

const Option = styled.div`
  &:not(:first-child) {
    margin-left: 0.5em;
  }
`

export {Options, Option}

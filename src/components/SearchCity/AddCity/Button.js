import styled from 'styled-components'

const Button = styled.button`
  background: #e2e2e3;
  border: none;
  border-radius: 50%;

  color: #fff;

  font-size: 2rem;
  line-height: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 1.5em;
  width: 1.5em;
  transition: 0.3s ease-in-out;

  &:not(:disabled) {
    background: #ff9900;
    cursor: pointer;
  }
`

export default Button

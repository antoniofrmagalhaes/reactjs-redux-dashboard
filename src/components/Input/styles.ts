import styled, { css } from 'styled-components'

interface IContainerProps {
  hasError?: boolean
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  border: 0;
  > input {
    max-width: 400px;
    width: 100%;
    height: 45px;
    padding: 0 16px;
    border-radius: 8px;
    border: 2px solid #dddddd;
    transition: all 250ms ease;
    ${({ hasError }) =>
      hasError &&
      css`
        border-color: #ff2436;
      `}
    &:focus {
      outline-width: 0;
      border-color: #2aafd4;
    }
  }
  > span {
    position: absolute;
    bottom: calc(100% + 8px);
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80%;
    font-weight: bold;
    color: #ff2436;
  }
`

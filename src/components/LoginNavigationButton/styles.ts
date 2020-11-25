import styled, { css } from 'styled-components'

interface IContainerProps {
  float?: string
}

export const Container = styled.div<IContainerProps>`
  position: absolute;
  top: 6px;
  ${({ float }) =>
    float === 'right'
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `}
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  > a {
    font-size: 14px;
    font-weight: bold;
    opacity: 0.6;
    transition: all 350ms ease;
    > div {
      > svg {
        margin-right: 10px;
      }
    }
    &:hover,
    &:active {
      color: #21819c;
      opacity: 1;
    }
  }

  @media screen and (min-width: 1024px) {
    top: initial;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid #eeeeee;
    > a {
      font-size: 16px;
    }
  }
`

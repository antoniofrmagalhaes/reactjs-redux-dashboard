import styled, { css, keyframes } from 'styled-components'

interface IContainerProps {
  open: boolean
}

const fromLeft = keyframes`
    0%{
      transform: translateX(-100%);
    }
    100%{
      transform: translateX(0);
    }
  `

export const Container = styled.div<IContainerProps>`
  z-index: 3;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 80%;
  height: 100%;
  color: #232323;
  background: #ffffff;
  border-right: 1px solid #dddddd;
  @media screen and (max-width: 1023px) {
    transform: translateX(-100%);
    ${({ open }) =>
      open &&
      css`
        animation: ${fromLeft} 350ms ease forwards;
      `};
  }

  @media (min-width: 420px) {
    width: 260px;
  }

  @media (min-width: 1600px) {
    width: 300px;
  }
`

import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  0% {
    transform: translateY(70px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`

export const FormContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
`

export const Heading = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
  color: #666666;
  transform: translateY(70px);
  opacity: 0;
  animation: 250ms ${fadeUp} 150ms ease forwards;
  > strong {
    font-size: 26px;
  }
`

export const ForgotPasswordContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eeeeee;
  > a {
    font-weight: bold;
    opacity: 0.6;
    transition: all 350ms ease;
    &:hover,
    &:active {
      color: #5b24c2;
      opacity: 1;
    }
  }
`

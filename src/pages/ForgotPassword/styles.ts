import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`

export const Header = styled.div`
  max-width: 400px;
  width: 100%;
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
    opacity: 0.6;
    transition: all 350ms ease;
    &:hover,
    &:active {
      color: #5b24c2;
      opacity: 1;
    }
  }
`

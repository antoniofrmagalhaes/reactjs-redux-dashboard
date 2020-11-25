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

export const BackButtonPlaceholder = styled.div`
  width: 100%;
  height: 50px;
  background: beige;
`

export const Header = styled.div`
  max-width: 400px;
  width: 100%;
  > p {
    margin: 16px 0;
  }
`

import { Flex } from '@chakra-ui/react'
import styled from 'styled-components'

export const Container = styled(Flex)`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #cbd5e0;
  background: #ffffff;
`

export const Header = styled.div`
  width: 100%;
  height: 49px;
  border-bottom: 1px solid #cbd5e0;
  background: #ffffff;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
`

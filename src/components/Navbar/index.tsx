import React from 'react'

import { Container, Header, SearchContainer } from './styles'

import Search from '../Search'

const Navbar: React.FC = () => {
  return (
    <Container padding={0} borderBottom="1px" borderColor="gray.300">
      <Header />
      <SearchContainer>
        <Search />
      </SearchContainer>
    </Container>
  )
}

export default Navbar

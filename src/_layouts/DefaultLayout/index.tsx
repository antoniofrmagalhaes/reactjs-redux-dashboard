import { Box } from '@chakra-ui/react'
import React from 'react'

import Navbar from '../../components/Navbar'
import Sidenav from '../../components/Sidenav'
import Drawer from '../../components/Drawer'

import { ContentContainer, Content } from './styles'

import Profile from '../../components/Profile'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Box width="100vw" height="100vh" position="relative" overflow="hidden">
      <Sidenav />
      <ContentContainer>
        <Navbar />
        <Content>{children}</Content>
      </ContentContainer>
      <Drawer orientation="right">
        <Profile />
      </Drawer>
    </Box>
  )
}

export default DefaultLayout

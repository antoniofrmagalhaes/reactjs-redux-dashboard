import { Flex } from '@chakra-ui/react'
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

import Navigator from '../Navigator'
import OpenNavButton from '../OpenNavButton'

import { Container } from './styles'

import config from '../../config/sidenav'

interface ISidenavProps {}

const Sidenav: React.FC<ISidenavProps> = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <Container open={open}>
        <OpenNavButton
          open={open}
          toggleHandler={() => setOpen(!open)}
          mobileOnly
        />
        <Flex height="100%" flexDirection="column" pt="48px">
          <Navigator config={config} handleCloseNav={() => setOpen(false)} />
        </Flex>
      </Container>
    </OutsideClickHandler>
  )
}

export default Sidenav

import React from 'react'
import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Flex
} from '@chakra-ui/react'

import { Link } from './styles'

import { IPath } from '../Navigator'
import Text from '../Text'

interface IGroupLinkProps {
  label: string
  subpaths: IPath[]
  handleCloseNav: () => void
}

const GroupLink: React.FC<IGroupLinkProps> = ({
  label,
  subpaths,
  handleCloseNav
}) => {
  const [active, setActive] = React.useState(false)
  return (
    <AccordionItem border={0}>
      <AccordionButton
        border={0}
        paddingRight="8px"
        _hover={{ backgroundColor: 'gray.200' }}
        onClick={() => setActive(!active)}
      >
        <Box width="100%" textAlign="left">
          <Text flex="1" fontWeight="bold" label={label} />
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel p={0} width="100%">
        <Flex flexDirection="column">
          {subpaths.map(({ id, to, label }) => (
            <Link key={id} label={label} to={to} onClick={handleCloseNav} />
          ))}
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default GroupLink

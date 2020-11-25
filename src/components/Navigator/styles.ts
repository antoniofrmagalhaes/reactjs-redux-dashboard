import styled from 'styled-components'
import { Accordion as ChakraAccordion } from '@chakra-ui/react'

export const Accordion = styled(ChakraAccordion)`
  height: calc(100%);
  overflow-y: auto;
  scrollbar-width: none;
  padding: 0;
  border: solid;
  border-width: 1px 0 0 0;
  border-color: #dddddd;
  &::-webkit-scrollbar {
    display: none;
  }
`

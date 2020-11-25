import React from 'react'
import {
  ThemeProvider as ChakraThemeProvider,
  theme,
  CSSReset
} from '@chakra-ui/react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import GlobalStyles from '../../styles'

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <ChakraThemeProvider theme={theme}>
        <CSSReset />
        <GlobalStyles />
        {children}
      </ChakraThemeProvider>
    </StyledThemeProvider>
  )
}

export default ThemeContainer

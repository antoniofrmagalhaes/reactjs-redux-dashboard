import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

interface ILoginNavigationButtonProps {
  children: React.ReactNode
  path: string
  float?: string
}

const LoginNavigationButton: React.FC<ILoginNavigationButtonProps> = ({
  children,
  path,
  float
}) => {
  return (
    <Container float={float}>
      <Link to={path}>{children}</Link>
    </Container>
  )
}

export default LoginNavigationButton

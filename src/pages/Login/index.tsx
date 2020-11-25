import React from 'react'

import LoginSlider from '../../components/LoginSlider'
import LoginForm from '../../components/Forms/Login'

import { Container, FormContainer, Heading } from './styles'
import LoginNavigationButton from '../../components/LoginNavigationButton'

const Login: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <Heading>
          <strong>APPLICATION</strong>
          <p>Lorem ipsum, dolor sit amet</p>
        </Heading>
        <LoginForm />
        <LoginNavigationButton path="/password/forgot" float="right">
          Forgot your password?
        </LoginNavigationButton>
      </FormContainer>
      <LoginSlider />
    </Container>
  )
}
export default Login

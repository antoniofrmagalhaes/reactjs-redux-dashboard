import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { RiArrowLeftLine } from 'react-icons/ri'

import ForgotPasswordForm from '../../components/Forms/ForgotPassword'
import LoginNavigationButton from '../../components/LoginNavigationButton'

import { Container, Header } from './styles'

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <Header>
        <Heading as="h2" size="lg">
          Forgot password?
        </Heading>
        <Text fontSize="md" my="16px">
          Enter the email address associated with your account and we will send
          you a link to reset your password.
        </Text>
      </Header>
      <ForgotPasswordForm />
      <LoginNavigationButton path="/login" float="right">
        <Flex alignItems="center">
          <RiArrowLeftLine size={18} /> Back to login
        </Flex>
      </LoginNavigationButton>
    </Container>
  )
}

export default ForgotPassword

import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { RiArrowLeftLine } from 'react-icons/ri'

import LoginNavigationButton from '../../components/LoginNavigationButton'
import ResetPasswordForm from '../../components/Forms/ResetPassword'

import { Container, Header } from './styles'

const ResetPassword: React.FC = () => {
  return (
    <Container>
      <Header>
        <Heading as="h2" size="xl">
          Reset password
        </Heading>
        <Text fontSize="lg">
          We highly recommend you to not reuse previous passwords.
        </Text>
      </Header>
      <ResetPasswordForm />
      <LoginNavigationButton path="/login" float="right">
        <Flex alignItems="center">
          <RiArrowLeftLine size={18} /> Back to login
        </Flex>
      </LoginNavigationButton>
    </Container>
  )
}

export default ResetPassword

import React from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import { FormLabel } from '@chakra-ui/react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import * as Yup from 'yup'

import { useAuth } from '../../../contexts/AuthContext'

import getValidationErrors from '../../../utils/getValidationErrors'

import { Form, FormControl, Styledinput } from './styles'

interface FormData {
  password: string
  confirmPassword: string
}

type TokenType = {
  token: string
}

const ResetPassword: React.FC<RouteComponentProps<TokenType>> = ({
  match: {
    params: { token }
  }
}) => {
  const formRef = React.useRef<FormHandles>(null)
  const { resetPassword } = useAuth()
  const handleSubmit: SubmitHandler<FormData> = async ({
    password,
    confirmPassword
  }) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        password: Yup.string().required('Password is required.'),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref('password')],
          'Passwords must match.'
        )
      })
      await schema.validate(
        { password, confirmPassword },
        {
          abortEarly: false
        }
      )
      resetPassword(password, token)
    } catch (err) {
      const validationErrors = getValidationErrors(err)
      if (err instanceof Yup.ValidationError) {
        formRef.current?.setErrors(validationErrors)
      }
    }
  }
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel htmlFor="password" mb="3px" color="#777777">
          New Password
        </FormLabel>
        <Styledinput name="password" type="password" />
      </FormControl>
      <FormControl mt="16px" isRequired>
        <FormLabel htmlFor="confirmPassword" mb="3px" color="#777777">
          Confirm Password
        </FormLabel>
        <Styledinput name="confirmPassword" type="password" />
      </FormControl>
      <button type="submit">Reset Password</button>
    </Form>
  )
}

export default withRouter(ResetPassword)

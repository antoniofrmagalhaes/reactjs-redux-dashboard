import React from 'react'
import { FormLabel } from '@chakra-ui/react'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { Form, FormControl } from './styles'

import { useAuth } from '../../../contexts/AuthContext'
import getValidationErrors from '../../../utils/getValidationErrors'
import Input from '../../Input'

interface FormData {
  email: string
}

const ForgotPasswordForm: React.FC = () => {
  const formRef = React.useRef<FormHandles>(null)
  const { forgotPassword } = useAuth()
  const handleSubmit = React.useCallback(
    async ({ email }: FormData) => {
      try {
        formRef.current?.setErrors({})
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Insert a valid e-mail.')
            .required('E-mail is required.')
        })
        await schema.validate(
          { email },
          {
            abortEarly: false
          }
        )
        forgotPassword(email)
      } catch (err) {
        const validationErrors = getValidationErrors(err)
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(validationErrors)
        }
      }
    },
    [forgotPassword]
  )

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel htmlFor="email">
          <small>Your email</small>
        </FormLabel>
        <Input name="email" placeholder="email@company.com" />
      </FormControl>
      <button type="submit">Request Password Reset</button>
    </Form>
  )
}

export default ForgotPasswordForm

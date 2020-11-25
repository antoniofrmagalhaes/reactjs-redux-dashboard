import React from 'react'
import { Checkbox, FormLabel } from '@chakra-ui/react'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { useAuth } from '../../../contexts/AuthContext'

import getValidationErrors from '../../../utils/getValidationErrors'

import Input from '../../Input'

import { Form, FormControl } from './styles'

interface FormData {
  email: string
  password: string
}

const Login: React.FC = () => {
  const { login } = useAuth()
  const formRef = React.useRef<FormHandles>(null)
  const handleSubmit = React.useCallback(
    async ({ email, password }: FormData) => {
      try {
        formRef.current?.setErrors({})
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Insert a valid e-mail.')
            .required('E-mail is required.'),
          password: Yup.string().required('Password is required.')
        })
        await schema.validate(
          { email, password },
          {
            abortEarly: false
          }
        )
        login(email, password)
      } catch (err) {
        const validationErrors = getValidationErrors(err)
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(validationErrors)
        }
      }
    },
    [login]
  )

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="email" my="3px">
          <small style={{ color: '#777777' }}>Your email</small>
        </FormLabel>
        <Input name="email" placeholder="email@company.com" />
      </FormControl>
      <FormControl mt="16px">
        <FormLabel htmlFor="password" mb="3px">
          <small style={{ color: '#777777' }}>Password</small>
        </FormLabel>
        <Input name="password" type="password" placeholder="*********" />
      </FormControl>
      <FormControl>
        <Checkbox variantColor="blue" defaultIsChecked>
          Keep me logged in
        </Checkbox>
      </FormControl>
      <button type="submit">Log In</button>
    </Form>
  )
}

export default Login

import React, { InputHTMLAttributes } from 'react'
import { useField } from '@unform/core'

import { Container } from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: React.FC<IInputProps> = ({ name, ...rest }) => {
  const inputRef = React.useRef(null)
  const { fieldName, defaultValue, registerField } = useField(name)

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  )
}

export default Input

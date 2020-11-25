import styled, { keyframes } from 'styled-components'
import { FormControl as ChakraFormControl } from '@chakra-ui/react'
import { Form as UnformForm } from '@unform/web'

const fadeUp = keyframes`
  0% {
    transform: translateY(70px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled(UnformForm)`
  max-width: 400px;
  width: 100%;
  > button {
    max-width: 400px;
    width: 100%;
    height: 45px;
    margin-top: 24px;
    color: #ffffff;
    border-radius: 8px;
    transition: all 250ms ease;
    box-shadow: 1px 1px 2px 0px rgba(33, 129, 156, 0.75);
    background: #2aafd4;
    &:hover {
      background: #21819c;
    }
    &:focus {
      outline-width: 0;
    }
    &:active {
      transform: translateY(0);
      box-shadow: 0px 0px 2px 0px rgba(33, 129, 156, 0.75);
    }
  }
`

export const FormControl = styled(ChakraFormControl)`
  > label {
    margin: 5px 0;
    > small {
      color: #777777;
    }
  }
`

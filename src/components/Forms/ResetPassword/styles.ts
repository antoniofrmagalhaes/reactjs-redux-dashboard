import styled from 'styled-components'
import { FormControl as ChakraFormControl } from '@chakra-ui/react'
import { Form as UnformForm } from '@unform/web'
import Input from '../../Input'

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
    font-weight: bold;
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

export const FormControl = styled(ChakraFormControl)``

export const Styledinput = styled(Input)`
  max-width: 400px;
  width: 100%;
  height: 45px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid #dddddd;
  transition: all 250ms ease;
  &:focus {
    border: 2px solid #21819c;
    padding: 0 15px;
  }
`

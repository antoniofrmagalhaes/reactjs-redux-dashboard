import { User } from './types'

export function signInRequest(email: string, password: string) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password }
  }
}

export function signInSuccess(user: User, token: string) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { user, token }
  }
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE'
  }
}

export function forgotPasswordEmailRequest(email: string) {
  return {
    type: '@auth/FORGOT_PASSWORD_EMAIL_REQUEST',
    payload: { email }
  }
}

export function forgotPasswordEmailSuccess() {
  return {
    type: '@auth/FORGOT_PASSWORD_EMAIL_SUCCESS'
  }
}

export function forgotPasswordEmailFailure() {
  return {
    type: '@auth/FORGOT_PASSWORD_EMAIL_FAILURE'
  }
}

export function resetPasswordRequest(password: string, recovery_token: string) {
  return {
    type: '@auth/RESET_PASSWORD_REQUEST',
    payload: { password, recovery_token }
  }
}

export function resetPasswordSuccess() {
  return {
    type: '@auth/RESET_PASSWORD_SUCCESS'
  }
}

export function resetPasswordFailure() {
  return {
    type: '@auth/RESET_PASSWORD_FAILURE'
  }
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT'
  }
}

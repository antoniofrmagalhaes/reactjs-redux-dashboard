export interface User {
  name: string
  email: string
}

export interface SignInRequest {
  email: string
  password: string
}

export interface SendPasswordRecoveryRequest {
  email: string
}

export interface ResetPasswordRequest {
  password: string
}

export interface AuthState {
  isAuthenticated: boolean
  token: string | null
}

interface SignInRequestAction {
  type: string
  payload: SignInRequest
}

interface SignInSuccess {
  type: string
  payload: {
    user: User
    token: string
  }
}

interface SignInFailure {
  type: string
}

interface SignOutAction {
  type: string
}

export type AuthActionTypes =
  | SignInRequestAction
  | SignInSuccess
  | SignInFailure
  | SignOutAction

import React from 'react'
import api from '../services/api'
import { useDispatch } from 'react-redux'
import {
  signInRequest,
  signOut,
  resetPasswordRequest,
  forgotPasswordEmailRequest
} from '../store/modules/authentication/actions'
import { store } from '../store'

interface IUser {
  first_name: string
  last_name: string
}

interface IAuthContextProps {
  isAuthenticated: boolean
  user: IUser
  loading: boolean
  login: (email: string, password: string) => void
  logout: () => void
  forgotPassword: (email: string) => void
  resetPassword: (password: string, recovery_token: string) => void
}

export const AuthContext = React.createContext<IAuthContextProps>(
  {} as IAuthContextProps
)

const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = (): IAuthContextProps => {
  return React.useContext(AuthContext)
}

export function useProvideAuth(): IAuthContextProps {
  const dispatch = useDispatch()
  const [loading] = React.useState(false)

  const login = async (email: string, password: string): Promise<void> => {
    dispatch(signInRequest(email, password))
  }

  const logout = async () => {
    dispatch(signOut())
    delete api.defaults.headers.Authorization
  }

  const forgotPassword = async (email: string): Promise<void> => {
    dispatch(forgotPasswordEmailRequest(email))
  }

  const resetPassword = async (
    password: string,
    recovery_token: string
  ): Promise<void> => {
    dispatch(resetPasswordRequest(password, recovery_token))
  }

  return {
    isAuthenticated: store.getState().authentication.isAuthenticated,
    user: store.getState().profile,
    loading,
    login,
    logout,
    forgotPassword,
    resetPassword
  }
}

export default AuthProvider

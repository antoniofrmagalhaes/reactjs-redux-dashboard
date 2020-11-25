import 'dotenv/config'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Router as BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import ThemeContainer from './contexts/theme/ThemeContainer'

import Routes from './routes'

import AuthProvider from './contexts/AuthContext'
import { store, persistor } from './store'
import history from './services/history'

const App: React.FC = () => {
  return (
    <ThemeContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter history={history}>
            <AuthProvider>
              <Routes />
              <ToastContainer autoClose={3000} />
            </AuthProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeContainer>
  )
}

export default App

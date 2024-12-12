'use client'

// React Imports
import { type ReactNode } from 'react'

// Third-party Imports
import { Provider } from 'react-redux'

import { store } from '@/redux/store'

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  // Init value redux here

  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider

// Type Imports
import { ConfigProvider } from 'antd'

import type { ChildrenType } from '@core/types'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'

type Props = ChildrenType

const Layout = ({ children }: Props) => {
  // Vars
  const direction = 'ltr'
  const systemMode = getSystemMode()

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Inter, sans-serif'
        }
      }}
    >
      <Providers direction={direction}>
        <BlankLayout systemMode={systemMode}>{children}</BlankLayout>
      </Providers>
    </ConfigProvider>
  )
}

export default Layout

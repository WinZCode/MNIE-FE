// Type Imports

import type { ChildrenType } from '@core/types'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'

// Util Imports
import VerticalFooter from '@components/layout/vertical/Footer'
import { getSystemMode } from '@core/utils/serverHelpers'
import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'

type Props = ChildrenType

const Layout = ({ children }: Props) => {
  // Vars
  const direction = 'ltr'
  const systemMode = getSystemMode()

  return (
    <Providers direction={direction}>
      <LayoutWrapper
        systemMode={systemMode}
        verticalLayout={
          <VerticalLayout navigation={<></>} navbar={<div>Nav bar</div>} footer={<VerticalFooter />}>
            {children}
          </VerticalLayout>
        }
        horizontalLayout={<BlankLayout systemMode={systemMode}>{children}</BlankLayout>}
      />
    </Providers>
  )
}

export default Layout

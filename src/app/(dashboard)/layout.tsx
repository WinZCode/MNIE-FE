// MUI Imports
import Button from '@mui/material/Button'

// Type Imports
import type { ChildrenType } from '@core/types'

// Layout Imports
import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'
import HorizontalLayout from '@layouts/HorizontalLayout'

// Component Imports
import Providers from '@components/Providers'
import Header from '@components/layout/horizontal/Header'
import HorizontalFooter from '@components/layout/horizontal/Footer'
import ScrollToTop from '@core/components/scroll-to-top'

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'
import { SideNavBar } from '@/components/navbar/SideNavBar'

const Layout = async ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'
  const systemMode = getSystemMode()

  return (
    <Providers direction={direction}>
      <LayoutWrapper
        systemMode={systemMode}
        verticalLayout={
          <VerticalLayout navigation={<SideNavBar />} navbar={<div></div>}>
            {children}
          </VerticalLayout>
        }
        horizontalLayout={
          <HorizontalLayout header={<Header />} footer={<HorizontalFooter />}>
            {children}
          </HorizontalLayout>
        }
      />
      <ScrollToTop className='mui-fixed'>
        <Button variant='contained' className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'>
          <i className='tabler-arrow-up' />
        </Button>
      </ScrollToTop>
    </Providers>
  )
}

export default Layout

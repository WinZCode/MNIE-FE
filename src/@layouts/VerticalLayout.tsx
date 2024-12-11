// React Imports
import type { ReactNode } from 'react'

// Third-party Imports

// Type Imports
import { Layout } from 'antd'

import type { ChildrenType } from '@core/types'
import { StyledHeader } from '@/styled/styled'

type VerticalLayoutProps = ChildrenType & {
  navigation?: ReactNode
  navbar?: ReactNode
  footer?: ReactNode
}

const VerticalLayout = (props: VerticalLayoutProps) => {
  // Props
  const { navbar, navigation, children } = props

  return (
    <Layout className='h-screen'>
      <StyledHeader>{navbar || null}</StyledHeader>
      <Layout>
        {navigation || null}
        <Layout>{children}</Layout>
      </Layout>
    </Layout>
  )
}

export default VerticalLayout

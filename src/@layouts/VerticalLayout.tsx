// React Imports
import type { ReactNode } from 'react'

// Third-party Imports

// Type Imports
import { Layout } from 'antd'

import type { ChildrenType } from '@core/types'

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
      {navbar || null}
      <Layout>
        {navigation || null}
        <Layout className='p-4 bg-[#f0f2f5]'>{children}</Layout>
      </Layout>
    </Layout>
  )
}

export default VerticalLayout

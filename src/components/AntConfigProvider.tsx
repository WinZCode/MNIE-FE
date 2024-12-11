'use client'

import { type ReactNode } from 'react'

import { ConfigProvider } from 'antd'

import { baseColorLight } from '@/utils/colors'

const AntdConfigProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: baseColorLight['sme-blue-7'],
          fontFamily: 'inherit'

          // Alias Token
          // ...
        },
        components: {
          Button: {
            fontWeight: 500
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default AntdConfigProvider

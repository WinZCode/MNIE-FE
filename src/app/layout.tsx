// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Font Imports
/* eslint-disable-next-line import/no-unresolved */
import { Inter } from 'next/font/google'

import { AntdRegistry } from '@ant-design/nextjs-registry'

// Style Imports
import '@/app/globals.scss'

// Generated Icon CSS Imports
import type { ChildrenType } from '@/@core/types'
import ReactQueryProvider from '@/components/ReactQueryProvider'
import '@assets/iconify-icons/generated-icons.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <html id='__next' lang='en' dir={direction}>
      <body className={inter.className}>
        <ReactQueryProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  )
}

export default RootLayout

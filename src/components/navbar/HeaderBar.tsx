'use client'

import { useRouter } from 'next/navigation'

import type { MenuProps } from 'antd'
import { Avatar, Dropdown } from 'antd'

import { useSelector } from 'react-redux'

import { getFirstLetter } from '@/utils/string'
import Link from '../Link'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link href={'/profile'} className='flex items-center gap-2 p-1'>
        <i className='icon-user size-5' />
        <div className='w-36'>Hồ sơ cá nhân</div>
      </Link>
    )
  },
  {
    key: '2',
    label: (
      <div className='flex items-center gap-2 p-1 text-body-14 font-medium' onClick={() => {}}>
        <i className='icon-logout size-5' />
        <div className='w-36 text-body-14 font-medium'>Đăng xuất</div>
      </div>
    )
  }
]

export const HeaderBar = () => {
  const user = useSelector((state: any) => state.user)
  const router = useRouter()

  return (
    <div className='bg-[#001529] h-14 px-6 flex items-center justify-between'>
      <div className='text-white flex items-center gap-2'>
        <i className='icon-logo-topo size-10' />
        <div className='text-xl'>MNIE</div>
      </div>
      <div className='flex items-center gap-2'>
        <i className='icon-circle-info text-white size-5 cursor-pointer' onClick={() => router.push('/introduction')} />

        <Dropdown menu={{ items }} placement='bottomRight'>
          {user?.avatar ? (
            <Avatar src={user?.avatar} className='bg-primary object-cover' />
          ) : (
            <div className='flex items-center gap-2'>
              <Avatar className='size-9 bg-white text-black'>{getFirstLetter('Admin')}</Avatar>
              <div>Admin</div>
            </div>
          )}
        </Dropdown>
      </div>
    </div>
  )
}

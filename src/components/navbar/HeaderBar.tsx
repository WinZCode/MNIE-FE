'use client'

import { useRouter } from 'next/navigation'

import Link from 'next/link'

import type { MenuProps } from 'antd'
import { Avatar, Dropdown, Tooltip } from 'antd'

import { getFirstLetter } from '@/utils/string'

import { useUser } from '@/hooks/useUser'

export const HeaderBar = () => {
  const { user, logout } = useUser()
  const router = useRouter()

  console.log(user)

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
        <div className='flex items-center gap-2 p-1 text-body-14 font-medium cursor-pointer' onClick={logout}>
          <i className='icon-logout size-5' />
          <div className='w-36 text-body-14 font-medium'>Đăng xuất</div>
        </div>
      )
    }
  ]

  return (
    <div className='bg-[#001529] h-14 px-6 flex items-center justify-between'>
      <div className='text-white flex items-center gap-2'>
        <i className='icon-logo-topo size-10' />
        <div className='text-xl'>MNIE</div>
      </div>
      <div className='flex items-center gap-2'>
        <Tooltip title='Giới thiệu'>
          <i
            className='icon-circle-info text-white size-5 cursor-pointer'
            onClick={() => router.push('/introduction')}
          />
        </Tooltip>

        <Dropdown menu={{ items }} placement='bottomRight'>
          {user?.avatar ? (
            <Avatar src={user?.avatar} className='bg-primary object-cover' />
          ) : (
            <div className='flex items-center gap-2'>
              <Avatar className='size-9 bg-white text-black'>{getFirstLetter(user?.username)}</Avatar>
              <div>{user?.username}</div>
            </div>
          )}
        </Dropdown>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'

import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />)
]

export const SideNavBar = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)} width={250}>
      <div className='demo-logo-vertical' />
      <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={items} style={{ height: '100%' }} />
    </Sider>
  )
}

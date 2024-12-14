'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import Link from 'next/link'

import { Button, Form, Input, message, Typography } from 'antd'

import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { useMutation } from '@tanstack/react-query'

import * as UserApi from '@/utils/userApi'

const { Text, Title } = Typography

export const RegisterForm = () => {
  const router = useRouter()

  const loginMutation = useMutation({
    mutationFn: UserApi.signupUser,
    onSuccess: () => {
      message.success('Đăng ký thành công')
      router.push('/home')
    },
    onError: () => message.error('Đăng ký thất bại')
  })

  const handleRegister = (data: any) => {
    loginMutation.mutate(data)
  }

  return (
    <section className='flex items-center h-screen bg-white px-0 py-12'>
      <div className='mx-auto my-0 w-[380px] py-12 px-4'>
        <div className='mb-8 text-center'>
          <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='0.464294' width='24' height='24' rx='4.8' fill='#1890FF' />
            <path d='M14.8643 3.6001H20.8643V9.6001H14.8643V3.6001Z' fill='white' />
            <path d='M10.0643 9.6001H14.8643V14.4001H10.0643V9.6001Z' fill='white' />
            <path d='M4.06427 13.2001H11.2643V20.4001H4.06427V13.2001Z' fill='white' />
          </svg>

          <Title className='text-3xl text-center'>Đăng ký</Title>
          <Text className='text-[#000000a6] text-center'>
            Chào mừng đến với MNIE! Hãy nhập thông tin để tạo tài khoản.
          </Text>
        </div>
        <Form
          name='normal_login'
          initialValues={{
            remember: true
          }}
          onFinish={handleRegister}
          layout='vertical'
          requiredMark='optional'
        >
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your Name!'
              }
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder='User Name' />
          </Form.Item>
          <Form.Item
            name='email'
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Email không được bỏ trống!'
              }
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder='Email' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Mật khẩu không được bỏ trống'
              }
            ]}
          >
            <Input.Password prefix={<LockOutlined />} type='password' placeholder='Password' />
          </Form.Item>
          <Form.Item
            name='confirmPassword'
            rules={[
              {
                required: true,
                message: 'Nhập lại mật khẩu không được bỏ trống!'
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }

                  return Promise.reject('Xác nhận mật khẩu không khớp với mật khẩu')
                }
              })
            ]}
          >
            <Input.Password prefix={<LockOutlined />} type='password' placeholder='Confirm Password' />
          </Form.Item>
          <Form.Item style={{ marginBottom: '0px' }}>
            <Button type='primary' htmlType='submit' className='w-full'>
              Đăng ký
            </Button>
            <div className='text-center mt-6'>
              <Text className='text-[#000000a6]'>Đã có tài khoản?</Text> <Link href='/login'>Đăng nhập</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  )
}

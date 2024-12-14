import { createSelector, createSlice } from '@reduxjs/toolkit'

import type { RootState } from '..'

const getInitialState = () => {
  if (typeof window !== 'undefined') {
    const storedUser = localStorage.getItem('user')

    return storedUser
      ? JSON.parse(storedUser)
      : {
          username: '',
          email: '',
          phone: '',
          address: '',
          avatar: '',
          access_token: '',
          id: '',
          isAdmin: false,
          refresh_token: '',
          isActive: false
        }
  }

  return {
    username: '',
    email: '',
    phone: '',
    address: '',
    avatar: '',
    access_token: '',
    id: '',
    isAdmin: false,
    refresh_token: '',
    isActive: false
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState: getInitialState(),
  reducers: {
    updateUser: (state, action) => {
      // Loại bỏ mật khẩu khỏi payload
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...updatedData } = action.payload

      const updatedUser = { ...state, ...updatedData }

      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(updatedUser))
      }

      return updatedUser
    },
    resetUser: () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user')
      }

      return {
        username: '',
        email: '',
        phone: '',
        address: '',
        avatar: '',
        access_token: '',
        id: '',
        isAdmin: false,
        refresh_token: '',
        isActive: false
      }
    }
  }
})

const userState = (state: RootState) => state.userReducer

export const selectUser = createSelector([userState], userState => userState)

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlice.actions

export default userSlice.reducer

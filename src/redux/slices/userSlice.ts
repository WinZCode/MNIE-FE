import { createSelector, createSlice } from '@reduxjs/toolkit'

import type { RootState } from '..'

interface User {
  username: string
  email: string
  phone: string
  address: string
  avatar: string
  access_token: string
  id: string
  isAdmin: boolean
  refresh_token: string
  isActive: boolean
}

const initialState: User = {
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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const {
        username = '',
        email = '',
        access_token = '',
        address = '',
        phone = '',
        avatar = '',
        _id = '',
        refresh_token = '',
        isActive = ''
      } = action.payload

      state.username = username ? username : state.username
      state.email = email ? email : state.email
      state.address = address ? address : state.address
      state.phone = phone ? phone : state.phone
      state.avatar = avatar ? avatar : state.avatar
      state.id = _id ? _id : state.id
      state.isActive = isActive ? isActive : state.isActive
      state.access_token = access_token ? access_token : state.access_token
      state.refresh_token = refresh_token ? refresh_token : state.refresh_token
    },
    resetUser: state => {
      state.username = ''
      state.email = ''
      state.address = ''
      state.phone = ''
      state.avatar = ''
      state.id = ''
      state.access_token = ''
      state.isAdmin = false
      state.refresh_token = ''
    }
  }
})

const userState = (state: RootState) => state.userReducer

export const selectUser = createSelector([userState], userState => userState)

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlice.actions

export default userSlice.reducer

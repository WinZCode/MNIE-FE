import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  avatar: '',
  access_token: '',
  id: '',
  isAdmin: false,
  refresh_token: ''
}

export const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const {
        name = '',
        email = '',
        access_token = '',
        address = '',
        phone = '',
        avatar = '',
        _id = '',
        refresh_token = ''
      } = action.payload

      state.name = name ? name : state.name
      state.email = email ? email : state.email
      state.address = address ? address : state.address
      state.phone = phone ? phone : state.phone
      state.avatar = avatar ? avatar : state.avatar
      state.id = _id ? _id : state.id
      state.access_token = access_token ? access_token : state.access_token
      state.refresh_token = refresh_token ? refresh_token : state.refresh_token
    },
    resetUser: state => {
      state.name = ''
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

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlide.actions

export default userSlide.reducer
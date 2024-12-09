// import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

export const axiosJWT = axios.create()

export const loginUser = async (data: any) => {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-in`, data)

  return res.data
}

export const signupUser = async (data: any) => {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-up`, data)

  return res.data
}

export const getDetailsUser = async (id: any, access_token: any) => {
  const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/user/get-details/${id}`, {
    headers: {
      token: `Bearer ${access_token}`
    }
  })

  return res.data
}

// export const deleteUser = async (id: any, access_token: any, data: AxiosRequestConfig<any> | undefined) => {
//   const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/user/delete-user/${id}`, data, {
//     headers: {
//       token: `Bearer ${access_token}`
//     }
//   })

//   return res.data
// }

export const getAllUser = async (access_token: any) => {
  const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/user/getAll`, {
    headers: {
      token: `Bearer ${access_token}`
    }
  })

  return res.data
}

// export const refreshToken = async () => {
//     const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/refresh-token`, {
//         withCredentials: true
//     })
//     return res.data
// }

export const refreshToken = async (refreshToken: any) => {
  console.log('refreshToken', refreshToken)

  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/refresh-token`,
    {},
    {
      headers: {
        token: `Bearer ${refreshToken}`
      }
    }
  )

  return res.data
}

export const logoutUser = async () => {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/log-out`)

  return res.data
}

export const updateUser = async (id: any, data: any, access_token: any) => {
  const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/user/update-user/${id}`, data, {
    headers: {
      token: `Bearer ${access_token}`
    }
  })

  return res.data
}

export const deleteManyUser = async (data: any, access_token: any) => {
  const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/user/delete-many`, data, {
    headers: {
      token: `Bearer ${access_token}`
    }
  })

  return res.data
}

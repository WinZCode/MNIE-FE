import { useRouter } from 'next/navigation'

import { useDispatch, useSelector } from 'react-redux'

import * as UserApi from '@/utils/userApi'
import { resetUser, selectUser } from '@/redux/slices/userSlice'

export const useUser = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const user = useSelector(selectUser)

  const isLogin = !!user.id

  const handleLogout = () => {
    // Gọi API logout (nếu cần)
    UserApi.logoutUser().catch(console.error)

    // Xóa tokens
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')

    // Reset Redux user state
    dispatch(resetUser())

    // Chuyển hướng đến trang đăng nhập
    router.push('/login')
  }

  return {
    user,
    isLogin,
    logout: handleLogout
  }
}

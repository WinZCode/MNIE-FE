import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Lấy token hoặc thông tin xác thực từ cookies
  const token = request.cookies.get('refresh_token')

  // Danh sách các route cần bảo vệ
  const protectedRoutes = ['/', '/home', '/about']

  if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    // Nếu không có token, chuyển hướng tới trang đăng nhập
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next() // Cho phép tiếp tục nếu hợp lệ
}

export const config = {
  matcher: ['/', '/home'] // Chỉ định các route áp dụng middleware
}

import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function DashboardPage() {
  const { isAuthenticated } = await auth()

  if (!isAuthenticated) {
    return (
      <div>Sign in to view this page. 이 페이지를 보려면 로그인하세요... </div>
    )
  }

  const user = await currentUser()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard (Server-side) </h1>
      <p>Welcome to dashboard</p>
      <p>이 페이지는 로그인된 사용자의 개인정보를 표시합니다. </p>
      <p>
        Welcome, {user?.firstName} {user?.lastName}
      </p>
      <p>Email: {user?.primaryEmailAddress?.emailAddress} </p>
      <p>사용자 등록 시간: {user?.createdAt} </p>
    </div>
  )
}

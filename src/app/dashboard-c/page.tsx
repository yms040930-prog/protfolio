'use client'

import { useUser } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'

export default function DashboardCPage() {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        Loading... 페이지 로딩중입니다...
      </div>
    )
  }

  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        <p>🔒 이 페이지를 보려면 로그인하세요.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800 border-b pb-4">
          🎓 {user.firstName} {user.lastName}의 포트폴리오 대시보드
        </h1>

        {/* 개인 정보 섹션 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            👤 개인 정보
          </h2>
          <p className="text-gray-600 mb-1">
            이름: {user.firstName} {user.lastName}
          </p>
          <p className="text-gray-600 mb-1">
            이메일: {user.primaryEmailAddress?.emailAddress}
          </p>
        </section>

        {/* 포트폴리오 소개 섹션 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            📘 포트폴리오 소개
          </h2>
          <p className="text-gray-600 leading-relaxed">
            이 포트폴리오 홈페이지는 <b>Next.js</b> 프레임워크와{' '}
            <b>Clerk 인증</b>을 이용해 제작되었습니다.
            <br />
            강의 시간에 배운 기술들을 기반으로 웹서비스를 개발하는 것을 목표로
            합니다.
          </p>
        </section>

        {/* 주요 링크 섹션 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            🔗 주요 링크
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="https://github.com/yms040930-prog"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 font-medium underline"
              >
                📁 GitHub 프로필
              </Link>
            </li>
            <li>
              <Link
                href="https://nextjs.org"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 font-medium underline"
              >
                ⚡ Next.js 공식 사이트
              </Link>
            </li>
          </ul>
        </section>

        {/* 푸터 */}
        <footer className="pt-6 border-t text-sm text-gray-500">
          © {new Date().getFullYear()} {user.firstName}의 포트폴리오. All rights
          reserved.
        </footer>
      </div>
    </div>
  )
}

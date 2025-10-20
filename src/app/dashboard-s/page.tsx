'use client'

import React from 'react'

export default function DashboardPage() {
  // 로그인 인증 관련 내용은 아직 수업 범위에 없으므로 제거
  // 대신 간단히 사용자 정보를 직접 입력하는 형태로 표현

  const user = {
    firstName: '민서',
    lastName: '염',
    email: 'ddg82949@gmail.com',
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white border rounded-2xl shadow-md p-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
          📊 {user.firstName}의 대시보드
        </h1>

        {/* 개인 정보 섹션 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            👤 개인 정보
          </h2>
          <p className="text-gray-600 mb-1">
            이름: {user.firstName} {user.lastName}
          </p>
          <p className="text-gray-600 mb-1">이메일: {user.email}</p>
        </section>

        {/* 포트폴리오 설명 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            📘 프로젝트 개요
          </h2>
          <p className="text-gray-600 leading-relaxed">
            이 페이지는 <b>Next.js</b>와 <b>Tailwind CSS</b>를 활용하여 제작된
            개인 포트폴리오 예제입니다.
            <br />
          </p>
        </section>

        {/* 기술 스택 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            🛠️ 사용 기술
          </h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>Next.js App Router 구조</li>
            <li>React 컴포넌트 및 JSX 문법</li>
            <li>Tailwind CSS 디자인</li>
            <li>기본 라우팅 및 페이지 구성</li>
          </ul>
        </section>

        {/* 푸터 */}
        <footer className="pt-6 mt-10 border-t text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} {user.firstName}의 포트폴리오. All rights
          reserved.
        </footer>
      </div>
    </div>
  )
}

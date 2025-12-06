import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'

export default function Header() {
  return (
    <header>
      <nav className="bg-gradient-to-r from-green-600 to-teal-500 shadow-xl py-4 px-8">
        <div className="flex items-center justify-between container mx-auto">
          {/* 로고 + 슬로건 */}
          <div className="flex items-center space-x-3">
            <FaLaptopCode className="text-white text-2xl transition-transform duration-300 hover:scale-110" />
            <div>
              <Link
                href="/"
                className="text-lg text-white font-bold hover:text-yellow-200 transition-colors"
              >
                Portfolio
              </Link>
              <p className="text-gray-200 text-sm transition-transform duration-300 hover:translate-x-1">
                개발과 학습 기록을 한 곳에
              </p>
            </div>
          </div>

          {/* 내비게이션 & 로그인/로그아웃 */}
          <div className="flex items-center font-semibold space-x-4">
            <Link
              href="/portfolio"
              className="text-gray-200 hover:text-white transition-colors"
            >
              Portfolio
            </Link>

            <SignedIn>
              <SignOutButton>
                <button className="bg-white text-green-600 px-4 py-1 rounded-lg shadow hover:bg-gray-100 transition-transform duration-300 hover:translate-y-[-2px]">
                  Sign Out
                </button>
              </SignOutButton>
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <button className="bg-white text-green-600 px-4 py-1 rounded-lg shadow hover:bg-gray-100 transition-transform duration-300 hover:translate-y-[-2px]">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </nav>
    </header>
  )
}

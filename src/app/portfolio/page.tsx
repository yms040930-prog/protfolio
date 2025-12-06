'use client'

import React, { useState, useEffect } from 'react'
import AddTopic from '../../components/AddTopic'
import { motion, AnimatePresence } from 'framer-motion'

interface Topic {
  id: number
  title: string
  description: string
}

interface AccordionProps {
  title: string
  content: string[]
}

function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-3 border rounded-lg overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-gray-100 px-4 py-3 text-left font-medium hover:bg-gray-200 transition"
      >
        <span>{title}</span>
        <span className="text-gray-500">{isOpen ? '▲' : '▼'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white px-4 py-2"
          >
            <ul className="list-disc list-inside text-gray-600">
              {content.map((item, idx) => (
                <li key={idx} className="py-1">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function DashboardPage() {
  const user = {
    firstName: '민서',
    lastName: '염',
    email: 'ddg82949@gmail.com',
  }

  const [topics, setTopics] = useState<Topic[]>([])

  useEffect(() => {
    fetch('/api/topics')
      .then((res) => res.json())
      .then((data) => setTopics(data))
  }, [])

  const handleAdd = (newTopic: Topic) => {
    setTopics([...topics, newTopic])
  }

  const handleDelete = async (id: number) => {
    await fetch('/api/topics', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    })
    setTopics(topics.filter((t) => t.id !== id))
  }

  const handleEdit = async (id: number) => {
    const newTitle = prompt('새 제목을 입력하세요')
    const newDescription = prompt('새 설명을 입력하세요')
    if (!newTitle || !newDescription) return

    await fetch('/api/topics', {
      method: 'PUT',
      body: JSON.stringify({
        id,
        title: newTitle,
        description: newDescription,
      }),
    })

    setTopics(
      topics.map((t) =>
        t.id === id ? { ...t, title: newTitle, description: newDescription } : t
      )
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white border rounded-3xl shadow-xl p-10">
        {/* 배너 */}
        <header className="mb-10">
          <motion.div
            className="flex items-center justify-between bg-gradient-to-r from-green-600 to-teal-500 rounded-2xl p-6 shadow-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-4">
              <motion.div
                className="text-white text-3xl"
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                💻
              </motion.div>
              <div>
                <h1 className="text-2xl text-white font-bold">
                  {user.firstName}의 포트폴리오
                </h1>
                <p className="text-gray-200 text-sm">
                  개발과 학습 기록을 한 곳에
                </p>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <a
                href="https://github.com/yms040930-prog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
              >
                GitHub
              </a>
            </motion.div>
          </motion.div>
        </header>

        {/* 개인 정보 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            👤 개인 정보
          </h2>
          <p className="text-gray-600 mb-1">
            이름: {user.firstName} {user.lastName}
          </p>
          <p className="text-gray-600 mb-1">이메일: {user.email}</p>
        </section>

        {/* 프로젝트 개요 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            📘 프로젝트 개요
          </h2>
          <p className="text-gray-600 leading-relaxed">
            <b>Next.js</b>와 <b>TypeScript</b> 기반. <b>Tailwind CSS</b>로 모던
            UI 구현, <b>MongoDB</b> + <b>Mongoose</b> 연동. 확장성과 유지보수성
            고려한 풀스택 개발 역량.
          </p>
        </section>

        {/* 블로그 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            📚 1학기 공부 내용
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            1학기 동안 학습한 내용을 정리한 블로그입니다.
          </p>
          <motion.a
            href="https://blog.naver.com/hello_world-777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-semibold py-2 px-4 rounded-lg shadow transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            블로그로 이동하기 →
          </motion.a>
        </section>

        {/* 깃허브 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            📂 깃허브 프로젝트
          </h2>
          <div className="flex flex-col gap-3">
            {[
              {
                name: '개인 깃허브 프로필',
                link: 'https://github.com/yms040930-prog',
                color: 'bg-gray-800 hover:bg-gray-900',
              },
              {
                name: '중간고사 포트폴리오 프로젝트',
                link: 'https://github.com/yms040930-prog/protfolio',
                color: 'bg-gray-700 hover:bg-gray-800',
              },
              {
                name: 'Clerk App 프로젝트',
                link: 'https://github.com/yms040930-prog/clrek-app-2',
                color: 'bg-gray-700 hover:bg-gray-800',
              },
              {
                name: 'CRUD 프로젝트',
                link: 'https://github.com/yms040930-prog/crud',
                color: 'bg-gray-600 hover:bg-gray-700',
              },
              {
                name: 'crud-action 프로젝트',
                link: 'https://github.com/yms040930-prog/crud-action',
                color: 'bg-gray-600 hover:bg-gray-700',
              },
              {
                name: 'Crud-2 프로젝트',
                link: 'https://github.com/yms040930-prog/Crud-2',
                color: 'bg-gray-500 hover:bg-gray-600',
              },
            ].map((item) => (
              <motion.a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block ${item.color} text-white font-semibold py-2 px-4 rounded-lg shadow transition-all duration-300`}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </section>

        {/* 포트폴리오 Topic 관리 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            📝 포트폴리오 주제 관리
          </h2>
          <AddTopic onAdd={handleAdd} />

          <ul className="mt-4 space-y-3">
            <AnimatePresence>
              {topics.map((topic) => (
                <motion.li
                  key={topic.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="border-b pb-2 p-4 rounded-lg shadow bg-gradient-to-r from-white to-gray-50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <h3 className="font-semibold text-gray-800 hover:text-green-600 transition-colors duration-300">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600">{topic.description}</p>
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(topic.id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-all duration-300"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => handleDelete(topic.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-all duration-300"
                    >
                      삭제
                    </button>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </section>

        {/* 기술 스택 (Accordion) */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            🛠️ 사용 기술 (Tech Stack)
          </h2>

          {[
            {
              title: '⚛️ 프레임워크 & 아키텍처',
              content: [
                'Next.js (App Router): 최신 파일 시스템 기반 라우팅과 서버 컴포넌트 활용',
                'Server Actions: 서버 사이드 비동기 함수 실행',
                'SSR & CSR: SEO 최적화 + 클라이언트 렌더링 조화',
              ],
            },
            {
              title: '📘 언어',
              content: [
                'TypeScript: 정적 타입 시스템으로 코드 안정성 향상',
                'React: 컴포넌트 기반 UI 구축',
              ],
            },
            {
              title: '🎨 스타일링',
              content: [
                'Tailwind CSS: 유틸리티 퍼스트 프레임워크로 빠른 UI 구현',
              ],
            },
            {
              title: '🍃 데이터베이스 & 백엔드',
              content: [
                'MongoDB Atlas: 클라우드 기반 NoSQL',
                'Mongoose: 스키마 정의 및 ODM',
                'CRUD 구현: 생성, 읽기, 수정, 삭제 기능 구현',
              ],
            },
            {
              title: '🔐 인증 & 배포',
              content: [
                'Clerk / Next-Auth: 소셜 로그인 및 세션 관리',
                'Vercel: 클라우드 배포',
              ],
            },
          ].map((section) => (
            <Accordion
              key={section.title}
              title={section.title}
              content={section.content}
            />
          ))}
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

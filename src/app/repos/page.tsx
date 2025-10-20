import { githubuser } from '@/types/constant'
import { Repository } from '@/types/repo'
import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

const username = githubuser

export default async function ReposPage() {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
      // 💡 캐시 설정 안 하면 stale 데이터 나올 수도 있음
      cache: 'no-store',
    }
  )

  // 혹시 API 호출 지연 시 시각적 테스트용
  await new Promise((resolve) => setTimeout(resolve, 1000))

  let repos
  try {
    repos = await response.json()
  } catch (error) {
    console.error('JSON 파싱 실패:', error)
    repos = []
  }

  if (!Array.isArray(repos)) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Unexpected data format:', repos)
    }
    return (
      <div className="text-red-600 bg-red-50 p-4 rounded-md">
        ⚠️ GitHub API 요청 중 오류가 발생했습니다.
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        📁 GitHub Repositories of {username}
      </h2>
      <ul>
        {repos.map((repo: Repository) => (
          <li
            key={repo.id}
            className="bg-gray-100 m-4 p-4 rounded-md shadow-sm hover:bg-gray-200 transition"
          >
            <Link href={`/repos/${repo.name}`}>
              <h3 className="text-xl font-bold text-blue-700">{repo.name}</h3>
              <p className="text-gray-600 mb-2">
                {repo.description || 'No description provided.'}
              </p>
              <div className="flex justify-between items-center text-gray-700 text-sm">
                <span className="flex items-center gap-1">
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

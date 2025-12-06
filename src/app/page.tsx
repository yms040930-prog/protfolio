import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>

      {/* 반투명 오버레이 */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* 콘텐츠 */}
      <div className="relative z-10 flex-1 py-16 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl mb-8 font-bold text-black text-center">
          환영합니다! 포트폴리오 홈입니다.
        </h1>

        <div className="mb-6 bg-white/90 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <Link
            href="https://blog.naver.com/hello_world-777"
            className="text-xl text-blue-700 font-bold hover:underline"
          >
            Naver Blog
          </Link>
          <p className="mt-2 text-gray-800">
            프로젝트, 개발 경험, 일상 기록 등 다양한 내용을 공유하는 개인
            블로그입니다.
          </p>
        </div>

        <div className="mb-6 bg-white/90 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <Link
            href="https://github.com/yms040930-prog"
            className="text-xl text-blue-700 font-bold hover:underline"
          >
            GitHub
          </Link>
          <p className="mt-2 text-gray-800">
            소스코드와 프로젝트를 관리하며, 공개 저장소를 통해 다양한 개발
            경험을 확인할 수 있습니다.
          </p>
        </div>

        <div className="mb-6 bg-white/90 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <Link
            href="https://www.notion.so/41c31ae8e3d74650bc644647fdaac134"
            className="text-xl text-blue-700 font-bold hover:underline"
          >
            Notion
          </Link>
          <p className="mt-2 text-gray-800">
            프로젝트 계획, 학습 기록, 포트폴리오 문서 등 체계적으로 정리한 개인
            자료실입니다.
          </p>
        </div>
      </div>
    </div>
  )
}

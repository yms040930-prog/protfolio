'use client' // App Router에서 클라이언트 컴포넌트임을 명시

import { useState } from 'react'

interface AddTopicProps {
  onAdd: (topic: { id: number; title: string; description: string }) => void
}

export default function AddTopic({ onAdd }: AddTopicProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/topics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    })
    const data = await res.json()
    if (res.ok) {
      onAdd(data)
      setTitle('')
      setDescription('')
    } else {
      alert(data.error || '오류 발생')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Topic
      </button>
    </form>
  )
}

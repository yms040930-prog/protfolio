import { NextResponse } from 'next/server'

let topics: { id: number; title: string; description: string }[] = []

export async function GET() {
  return NextResponse.json(topics)
}

export async function POST(req: Request) {
  const { title, description } = await req.json()
  if (!title || !description) {
    return NextResponse.json({ error: '모든 필드 필요' }, { status: 400 })
  }
  const newTopic = { id: topics.length + 1, title, description }
  topics.push(newTopic)
  return NextResponse.json(newTopic, { status: 201 })
}

// Delete 기능
export async function DELETE(req: Request) {
  const { id } = await req.json()
  topics = topics.filter((t) => t.id !== id)
  return NextResponse.json({ success: true })
}

// Edit(수정) 기능
export async function PUT(req: Request) {
  const { id, title, description } = await req.json()
  topics = topics.map((t) => (t.id === id ? { ...t, title, description } : t))
  return NextResponse.json({ success: true })
}

import { auth, currentUser } from '@clerk/nextjs/server'

export default async function HomePage() {
  const { isAuthenticated } = await auth()

  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>
  }

  const user = await currentUser()

  return (
    <div>
      <h1>Welcome Home!</h1>
      <p>hello world</p>
    </div>
  )
}

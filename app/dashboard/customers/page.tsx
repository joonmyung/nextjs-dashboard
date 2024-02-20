import { auth } from "@/auth"

export default async function Page() {
  const session = await auth()

  return (
    <div>
      <h1>Settings Page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
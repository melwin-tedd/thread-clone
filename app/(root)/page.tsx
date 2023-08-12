//app/page.tsx
import { UserButton, currentUser } from '@clerk/nextjs'

export default function Home() {
  const user = currentUser()

  console.log(user)

  return (
    <>
      <h1 className='text-left head-text'>Home</h1>
    </>
  )
}

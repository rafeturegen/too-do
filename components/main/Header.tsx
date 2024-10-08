import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="flex justify-between px-24 py-3 bg-gray-200 items-center">
      <h1 className="text-lg font-bold tracking-tight">Too-DO</h1>
      <div className="flex gap-1.5">
        <Link href="/log-in" className="px-3 py-1 bg-white text-black tracking-tight rounded-[0.45rem] hover:opacity-80 hover:scale-110">Log In</Link>
        <Link href="/sign-up" className="px-2 py-1 border bg-black text-white tracking-tight rounded-[0.45rem] hover:opacity-80 hover:scale-110">Sign Up</Link>
      </div>
    </header>
  )
}

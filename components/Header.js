import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6  bg-stone-900  shadow">
        <Link href='/' className="text-2xl font-bold text-blue-600 hover:cursor-pointer hover:text-amber-700">FileTrans</Link>
        <div className="space-x-4">
          <Link href='/upload' className="text-blue-600 hover:text-amber-700 ">Upload</Link>
          <Link href='/dashboard' className="text-blue-600 hover:text-amber-700">Dashboard</Link>
        </div>
      </header>
  )
}

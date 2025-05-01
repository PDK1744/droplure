import React from 'react'
import Link from 'next/link'
import { updateSession } from '../utils/supabase/middleware'
import { logout } from '@/app/login/actions';

export default function Header() {
  const { user } = updateSession();

  return (
    <header className="flex items-center justify-between p-6  bg-stone-900  shadow">
        <Link href='/' className="text-2xl font-bold text-blue-600 hover:cursor-pointer hover:text-amber-700">FileTrans</Link>
        <div className="space-x-4">
          <Link href='/upload' className="text-blue-600 hover:text-amber-700 ">Upload</Link>
          {user && (
            <>
            <Link href='/dashboard' className="text-blue-600 hover:text-amber-700">Dashboard</Link>
            <button onClick={() => logout()} className="text-blue-600 hover:text-amber-700">Logout</button>
            </>
          )}
        </div>
      </header>
  )
}

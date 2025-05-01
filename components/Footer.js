import React from 'react'

export default function Footer() {
  return (
    <footer className='py-8 text-center text-sm text-gray-500'>
        &copy; {new Date().getFullYear()} FileTrans | All rights reserved
    </footer>
  )
}

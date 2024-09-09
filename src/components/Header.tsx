import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex gap-3 p-6 bg-slate-500'>
        <Link href="/">Home Page</Link>
        <Link href="/about">About Page</Link>
        <Link href="/contact">Contact Page</Link>
        <Link href="/address">Address Page</Link>
    </div>
  )
}

export default Header
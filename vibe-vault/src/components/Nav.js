import Link from 'next/link'
import React from 'react'

const nav = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#1282A2] p-6">
<div className="mr-6 text-[#F4FFFD] p-6 bg-slate-600">
Vibe Vault
</div>
<div className="w-full flex items-center justify-end">
    <Link href="/add" className="text-[#F4FFFD]">
    Add Photo &nbsp;
    </Link>
    <Link href="/" className="text-[#F4FFFD]">
    My Vault
    </Link>

</div>
    </nav>
  )
}

export default nav
import Link from 'next/link'
import React from 'react'

const nav = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-900 p-6">
<div className="mr-6 text-white p-6 bg-slate-600">
TodoList
</div>
<div className="w-full flex items-center justify-end">
    <Link href="/add" className="text-teal-200">
    Add todo
    </Link>
    <Link href="/" className="text-teal-200">
    View todos
    </Link>

</div>
    </nav>
  )
}

export default nav
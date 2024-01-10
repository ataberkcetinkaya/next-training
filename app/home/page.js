import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <div>This is Home</div>
      <div><Link href="/docs/post1">Go to Post 1</Link></div>
      <div><Link href={{pathname:"/about", query:{name: "ataberk"}}}>Link with Query</Link></div>
    </>
  )
}

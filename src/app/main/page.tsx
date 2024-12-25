import Link from 'next/link'
import React from 'react'

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Link href={"/something"}></Link>
      <Link href={"/about"}></Link>
    </div>
  )
}

export default MainPage

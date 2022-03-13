import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <nav className="flex-container" id="sidebar">
      <div id="directory">
        <ul>
          <li>
            <Link href="/">main</Link>
          </li>
          <li>
            <Link href="/nfts">nfts</Link>
          </li>
          <li>
            <Link href="/etc">etc</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}



export default Sidebar;
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
            <Link href="/web3">web3 </Link>
          </li>
          <li>
            <Link href="/brickbot">brick bot</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}



export default Sidebar;
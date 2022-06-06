import Link from 'next/link'

const Sidebar = () => {
  return (
    <nav className="flex-container" id="sidebar">
      <div id="directory">
        <ul>
          <li><Link href="/">main</Link></li>
          <li><Link href="/goals">goals</Link></li>
          <li><Link href="/web3">web3</Link></li>
        </ul>
      </div>
    </nav>
  )
}



export default Sidebar;
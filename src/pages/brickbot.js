import Sidebar from '../components/Sidebar';
import Link from 'next/link'

const brickBot = () => {

  return (
    <div className="flex-container" id="parent">
      <Sidebar />
      <div className='wrapper'>
        <div className='panel'>
          <div className='title'>Brick Bot</div>
          <div className='img'>
            <img src="../pixel-brick.png" width="64" height="64"></img>
          </div>
          <div className='description'>
            <span>Sneaker Utility Discord Bot</span>
            <span>StockX price data</span>
            <span>Variant scraper</span>
            <span>Success leaderboard</span>
            
          </div>
          <div className='checkout'>
            <Link href="https://buy.stripe.com/dR65kTfhq0Vb5tCdQQ"><a target="_blank">Checkout</a></Link>
          </div>
          <div><span>$7 / month</span></div>
        </div>
      </div>
    </div>
  )
}

export default brickBot;
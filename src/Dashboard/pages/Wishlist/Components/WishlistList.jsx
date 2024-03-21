import './WishlistList.css'
import WishlistListItem from './WishlistListItem'

function WishlistList({wishlist}) {
  return (
    <div className='wishlist-list'>
      <hr className='line'/>
      <div > {wishlist.map((item, index) => (
          <WishlistListItem key={index} data={item} />
        ))}
        <hr className='line'/>
      </div>
    </div>
  )
}

export default WishlistList
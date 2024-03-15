import React from 'react'
import './SiteBar.css'

function SiteBar() {
  return (
    <div className='site-bar'>
        <button className='site-bar button'>Brettspill</button>
        <button className='site-bar button'>Puslespill</button>
        <button className='site-bar button'>Rollespill</button>
        <button className='site-bar button'>Kortspill</button>
    </div>
  )
}

export default SiteBar
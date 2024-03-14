import React from 'react'
import LogoSVG from '../assets/LogoSVG'
import './Header.css'

function Header() {
  return (
    <header>
      <LogoSVG primaryColor="var(--dark-red)" secondaryColor="var(--off-white)"></LogoSVG>
    </header>
  )
}

export default Header
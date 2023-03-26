import React from 'react'
import logo from './images/logo.png';

function Header() {
  return (

    <div>
        <header className='header' id='home'>
          <img src={logo} width={'5%'} height={'auto'} alt={"logoImage"}/>
          <h1><span className='red'>U</span>nique <span className='red'>P</span>est <span className='red'>C</span>ontrol</h1>
        </header>
        <h1 className='header__h1'>Welcome!!!</h1>
      </div>
  )
}

export default Header

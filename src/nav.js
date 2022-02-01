import React from 'react'

import {Link } from 'react-router-dom'
import './navbar.css'

function NavBar() {
  const [click, setClick] = React.useState(false)

  const handleClick = () => setClick(!click)
  const Close = () => setClick(false)

  return (
    <div>
      <div className={click ? 'main-container' : ''} onClick={() => Close()} />
      <nav className='navbar' onClick={(e) => e.stopPropagation()}>
        <div className='nav-container'>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/'
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/resume'
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}
              >
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/work'
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}
              >
                Work
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/writing'
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}
              >
                Writing
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar


import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'



function NavBar(props) {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 650)
  const [openMenu, setOpenMenu] = useState(false)

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 428)
  }
  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => {window.removeEventListener('resize', updateMedia)}
  })

  const menu = () => {
    setOpenMenu(!openMenu)
  }



  return ( <>

    {!isDesktop && (
      <nav className={openMenu ? 'mobile-nav yellow' : 'mobile-nav'} >
        <button className={openMenu ? 'menu-btn yellow' : 'menu-btn'} onClick={menu}><i class="fa-solid fa-bars"></i></button>
        {openMenu && (
          <div className='mobile-list'>
            <Link>My Work</Link>
            <Link>Gallery</Link>
            <Link>About</Link>
          </div>
        )}
      </nav>

    )}

    {/* desktop view */}
    {isDesktop && (
    <nav className='desk-nav'>
          <h3 className='logo'>Kristens Creations</h3>
        <div className='links'>
            <Link>My Work</Link>
            <Link>Gallery</Link>
            <Link>About</Link>
        </div>
    </nav>
    )}
  </>
  )
}

export default NavBar

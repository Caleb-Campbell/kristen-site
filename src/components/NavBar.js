import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(props) {
  return (
    <nav>
        <div className='logo'></div>
        <div className='links'>
            <Link>My Work</Link>
            <Link>Gallery</Link>
            <Link>About</Link>
        </div>
    </nav>
  )
}

export default NavBar

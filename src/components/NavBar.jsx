import React from 'react'

const NavBar = () => {
  return (
    <nav>
        <div className="navbar nav1">
            moja firma
        </div>
        <div className="navbar nav2">
            <a href="#aboutref" className="pagelink">o nas</a>
        </div>
        <div className="navbar nav3">
            <a href="#ofertaref" className="pagelink">oferta</a>
        </div>
        <div  className="navbar nav4" disabled="disabled">
            kontakt
        </div>
    </nav>
  )
}

export default NavBar
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer>
        <div className="footertext">Nazwa firmy - wszelkie prawa zastrzeżone, 2019</div>
        <FontAwesomeIcon icon={faFacebookSquare} />
        <FontAwesomeIcon icon={faInstagram} />
    </footer>
  )
}

export default Footer
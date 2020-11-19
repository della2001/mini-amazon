import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import '../Main.css'

const Header = () => {
  return (
    <div className='header'>
      <Link to="/" className="title">Mini Amazon</Link>
      <div>
        <Button href="/cart" className="cartButton" variant="info">My Cart</Button>
        {!localStorage.getItem('uid') && (
          <>
            {/* <Button href="/register" className="registerButton">Register</Button> */}
            <Button href="/login" className="loginButton">Log In</Button>
          </>
        )}
      </div>
    </div>
  )
}

export default Header

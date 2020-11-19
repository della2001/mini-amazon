import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import '../Main.css'

const logout = () => {
  localStorage.removeItem('uid')
  window.location.reload()
}

const Header = () => {
  return (
    <div className='header'>
      <Link to="/" className="title">Mini Amazon</Link>
      <div>
        <Button href="/cart" className="cartButton" variant="info"><ShoppingCartOutlined /> My Cart</Button>
        {!localStorage.getItem('uid') ? (
          <Button href="/login" className="loginButton"><UserOutlined /> Log In</Button>
        ) : (
          <Button className="logoutButton" onClick={logout}><UserOutlined /> Log out</Button>
        )}
      </div>
    </div>
  )
}

export default Header

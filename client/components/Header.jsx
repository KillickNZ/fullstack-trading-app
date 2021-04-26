import React from 'react'
import Login from './Login'

function Header (props) {
  return (
    <div className="header">
      <h1 className="logo-name">CryptoKnight</h1>
      <Login setLoggedIn={props.setLoggedIn} user={props.user} setUser={props.setUser} />
    </div>
  )
}

export default Header

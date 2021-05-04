import React, { useState } from 'react'
import { getUser } from '../apis/mainApi'
import { connect } from 'react-redux'

import { setUser, setLoggedIn } from '../actions/stockActions'

function Login (props) {
  const [registerUser, setRegisterUser] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginUserName, setLoginUserName] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  // ========= Login display =========== //
  const [loginClicked, setLoginClicked] = useState(false)
  const [regClicked, setRegClicked] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    const user = {
      ...props.user,
      [e.target.name]: e.target.value
    }
    return props.setUser(user)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    return getUser(props.user.username, props.user.password)
      .then((res) => {
        {res && props.dispatch(setUser(res))}
        {res ? props.dispatch(setLoggedIn('true')): props.dispatch(setLoggedIn('false'))}
        return null
    })
  }
  console.log('props data:', props.activeUser, props.loggedIn);

  const renderLogin = () => {
    console.log('rendereing login')
    return ( 
    <form onSubmit={(e) => { handleSubmit(e) }}>
        <label htmlFor='username' className='input-label'>Username:
          <input
            className='login-input'
            type='text'
            name='username'
            id='username'
            required
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor='password' className='input-label'>Password:
          <input
            className='login-input'
            type='text'
            name='password'
            id='password'
            required
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button className='button-one' type='submit'>Login</button>
      </form>
    )
  }

  const renderRegister = () => {
    return (
       <form onSubmit={(e) => { handleSubmit(e) }}>
        <label htmlFor='username' className='input-label'>Username:
          <input
            className='login-input'
            type='text'
            name='username'
            id='username'
            required
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor='password' className='input-label'>Password:
          <input
            className='login-input'
            type='text'
            name='password'
            id='password'
            required
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button className='button-one' type='submit'>Register</button>
      </form>
    )
  }

  const handleLoginClick = () => {
    setLoginClicked(!loginClicked) 
    setRegClicked(false)
  }

  const handleRegClicked = () => {
    setRegClicked(!regClicked)
    setLoginClicked(false)
  }

  const handleLogOutClick = () => {
    props.dispatch(setLoggedIn(false))
  }

  const logAndReg = () => {
    return (
      <>
        { loginClicked ? renderLogin() : <button className='button-one' type='button' onClick={ () => handleLoginClick() }>Login</button> }
        { regClicked ? renderRegister() : <button className='button-one' type='button' onClick={ () => handleRegClicked() }>Register</button> }
      </>
    )
  }

  return (
    <div className="form-container">
      {props.loggedIn ? <button className='button-one' type='button' onClick={ () => handleLogOutClick() }> Log out </button> : logAndReg()}
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    activeUser: globalState.activeUser,
    loggedIn: globalState.loggedIn
  }
}

export default connect(mapStateToProps)(Login)

import React, { useState } from 'react'
import { getUser } from '../apis/mainApi'
import { connect } from 'react-redux'

import { setUser, setLoggedIn } from '../actions/stockActions'

function Login (props) {
  const [registerUser, setRegisterUser] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginUserName, setLoginUserName] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

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
    return {
      
    }
  }

  return (
    <div className="form-container">
      {/* ========= Login =========== */}
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <label htmlFor='username' className='input-label'>Username:
          <input
            className='login-input'
            type='text'
            name='username'
            id='username'
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor='password' className='input-label'>Password:
          <input
            className='login-input'
            type='text'
            name='password'
            id='password'
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button className='button-one' type='submit'>Login</button>
      </form>

      {/* ========= Register =========== */}
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <label htmlFor='username' className='input-label'>Username:
          <input
            className='login-input'
            type='text'
            name='username'
            id='username'
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor='password' className='input-label'>Password:
          <input
            className='login-input'
            type='text'
            name='password'
            id='password'
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button className='button-one' type='submit'>Register</button>
      </form>
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

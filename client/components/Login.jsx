import React, { useState } from 'react'
import { register, login as apiLogin, logOutFunc } from '../apis/auth'
import { connect } from 'react-redux'

import { setUser, setLoggedIn } from '../actions/userActions'
import { setWatchList } from '../actions/stockActions'
import { getUserWatchlist } from '../apis/mainApi'

function Login (props) {
  // ========= Auth States =========== //
  const [registerUser, setRegisterUser] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginUserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  // ========= Login display =========== //
  const [loginClicked, setLoginClicked] = useState(false)
  const [regClicked, setRegClicked] = useState(false)

  // ========= Login handlers ========== //

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    return apiLogin(loginUserName, loginPassword)
      .then((result) => {
        props.dispatch(setUser(result))
        props.dispatch(setLoggedIn(true))
        return null
      })
      .then(() => {
        return getUserWatchlist(loginUserName)
      })
      .then((itemArr) => {
        return props.dispatch(setWatchList(itemArr.watchlist.split(',')))
      })
      .catch((err) => console.log(err))
  }

  // ========= Reg handlers ========== //

  const handleRegSubmit = (e) => {
    e.preventDefault()
    register(registerUser, registerPassword)
  }

  // const handleRegChange = (e) => {
  //   e.preventDefault()
  //   const user = {
  //     ...props.user,
  //     [e.target.name]: e.target.value
  //   }
  //   return props.setUser(user)
  // }

  const renderLogin = () => {
    return (
      <form
        onSubmit={(e) => {
          handleLoginSubmit(e)
        }}
        className="form"
      >
        <label htmlFor="username" className="input-label">
          Username:
          <input
            className="login-input"
            type="text"
            name="username"
            id="username"
            required
            onChange={(e) => setLoginUserName(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="input-label">
          Password:
          <input
            className="login-input"
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </label>
        <button className="button-one" type="submit">
          Login
        </button>
      </form>
    )
  }

  const renderRegister = () => {
    return (
      <form
        onSubmit={(e) => {
          handleRegSubmit(e)
        }}
        className="form"
      >
        <label htmlFor="username" className="input-label">
          Username:
          <input
            className="login-input"
            type="text"
            name="username"
            id="username"
            required
            onChange={(e) => setRegisterUser(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="input-label">
          Password:
          <input
            className="login-input"
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </label>
        <button className="button-one" type="submit">
          Register
        </button>
      </form>
    )
  }

  // ================= This all handles the display of the log in or registration forms  ================= //

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
    props.dispatch(setUser(null))
    return logOutFunc()
  }

  const logAndReg = () => {
    return (
      <>
        {loginClicked ? (
          renderLogin()
        ) : (
          <button
            className="button-one"
            type="button"
            onClick={() => handleLoginClick()}
          >
            Login
          </button>
        )}
        {regClicked ? (
          renderRegister()
        ) : (
          <button
            className="button-one"
            type="button"
            onClick={() => handleRegClicked()}
          >
            Register
          </button>
        )}
      </>
    )
  }

  return (
    <div className="form-container">
      {props.loggedIn ? (
        <button
          className="button-one"
          type="button"
          onClick={() => handleLogOutClick()}
        >
          Log out
        </button>
      ) : (
        logAndReg()
      )}
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

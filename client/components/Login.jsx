import React from 'react'
import { getUser } from '../api'

function Login (props) {
  const handleChange = (e) => {
    e.preventDefault()

    const user = {
      ...props.user,
      [e.target.name]: e.target.value
      // ,
      // e.target: e.target.value
    }
    return props.setUser(user)
  }

  const handleSubmit = (e) => {
    // console.log('Submitting to db' + props.user)
    e.preventDefault()
    return getUser(props.user.username, props.user.password).then((res) => {
      // props.setUser(res.body)
      // props.setLoggedIn(true)
      // console.log('User data' + res)
      return res
    })
  }

  console.log('Props.user: ', props.user)
  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <label htmlFor='username' className='input-label'>
          Username:
          <input
            className='login-input'
            type='text'
            name='username'
            id='username'
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor='password' className='input-label'>
          Password:
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
    </div>
  )
}

export default Login

import axios from 'axios'

// import request from 'superagent'
// import { register as authRegister, signIn as authLogin } from 'authenticare/client'

// import { baseApiUrl as baseUrl } from '../config'

const url = '/api/v1/authRoutes'

export function register (registerUsername, registerPassword) {
  console.log('API reg creds', registerUsername, registerPassword)
  axios({
    method: 'POST',
    data: {
      username: registerUsername,
      password: registerPassword
    },
    withCredentials: true,
    url: url + '/register'
  })
    .then(
      (result) => console.log(result)
    )
    .catch((err) => {
      console.log(err)
    })
}

export function login (creds) {
  console.log('API login creds', creds)
  axios({
    method: 'GET',
    data: {
      username: creds.loginUserName,
      password: creds.loginPassword
    },
    withCredentials: true,
    url: url + '/login'
  })
    .then(
      (result) => console.log(result)
    )
    .catch((err) => {
      console.log(err)
    })
}

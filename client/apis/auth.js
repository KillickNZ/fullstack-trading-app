import axios from 'axios'

const url = '/api/v1/authRoutes'

export function register (registerUsername, registerPassword) {
  console.log('API reg creds', registerUsername, registerPassword)
  return axios({
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

export function login (registerUsername, registerPassword) {
  return axios({
    method: 'POST',
    data: {
      username: registerUsername,
      password: registerPassword
    },
    withCredentials: true,
    url: url + '/login'
  })
    .then(
      (result) => {
        console.log({ username: result.data.username, id: result.data.id })
        return { username: result.data.username, id: result.data.id }
      }
    )
    .catch((err) => {
      console.log(err)
    })
}

export function getUser () {
  return axios({
    method: 'GET',
    withCredentials: true,
    url: url + '/user'
  })
    .then((result) => console.log('getUser result:', result)) // send data to redux state
    .catch((err) => {
      console.log(err)
    })
}

export function logOutFunc () {
  console.log('logged out api')
  return axios({
    method: 'GET',
    url: url + '/logout'
  })
    .then((result) => console.log('logged out:', result)) // send data to redux state
    .catch((err) => {
      console.log(err)
    })
}

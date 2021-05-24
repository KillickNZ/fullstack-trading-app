import axios from 'axios'

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
        // return { username: result.data.username, id: result.data.id }
        return 10
      }
    )
    .catch((err) => {
      console.log(err)
    })
}

export function getUser () {
  axios({
    method: 'GET',
    withCredentials: true,
    url: url + '/user'
  })
    .then((result) => console.log('getUser result:', result)) // send data to redux state
    .catch((err) => {
      console.log(err)
    })
}

export const SET_USER = 'SET_USER'
export const SET_LOGGED_IN = 'SET_LOGGED_IN'

export function setUser (user) {
  console.log('setUser fired')
  return {
    type: SET_USER,
    activeUser: user
  }
}

export function setLoggedIn (bool) {
  console.log('setLoggedIn fired')
  return {
    type: SET_LOGGED_IN,
    bool: bool
  }
}

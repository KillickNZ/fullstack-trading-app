// const config = require('./knexfile').development
const connection = require('./connection')

// =========== USER - DB FUNCTIONS =========== //

const getUsers = (db = connection) => {
  return db('users')
    .select()
    .catch((err) => {
      console.log(err)
    })
}

const addUser = (username, password, db = connection) => {
  console.log('adding user')
  return db('users')
    .insert({
      username: username,
      hash: password
    })
    .catch((err) => {
      console.log(err)
    })
}

const getUser = (username, password, db = connection) => {
  console.log('Get User', username)
  return db('users')
    .select()
    .where({
      username: username,
      hash: password
    })
    .catch((err) => {
      console.log(err)
    })
}

const userExists = (username, db = connection) => {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then((count) => {
      return count[0].n > 0
    })
    .catch(err => {
      console.log(err)
    })
}

const deleteUser = (username, password, db = connection) => {
  return db('users')
    .where({
      username: username,
      hash: password
    })
    .del()
    .catch((err) => {
      console.log(err)
    })
}

// const registerUser = (username, password, db = connection) => {}

// =========== Watchlist - DB FUNCTIONS =========== //

const getWatchlist = (username, db = connection) => {
  console.log('hitting db')
  return db('users')
    .select('watchlist')
    .where('username', username)
    .catch((err) => {
      console.log(err)
    })
}

const updateWatchlist = (username, watchlist, db = connection) => {
  return db('users')
    .where('username', username)
    .update({ watchlist: watchlist })
    .catch((err) => {
      console.log(err)
    })
}

// =========== Stonks - DB FUNCTIONS =========== //

// const addStocks = (obj, db = connection) => {
// return (
//     db('Posts')
//     .insert(obj)
//     .catch((err) => {
//         console.log(err)
//     })
// )
// }

// const updateStocks = (id, title, paras, db = connection) => {
// // console.log('id: ', id, 'title: ', title)
// return (
//     db('Posts')
//     .where('id', id)
//     .update({'title': title},{'paragraphs': paras})
//     .then(() => {
//         return getBlogPost(id)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// )
// }

// =========== COMMENT DB FUNCTIONS =========== //

module.exports = {
  getUser,
  getUsers,
  addUser,
  deleteUser,
  getWatchlist,
  updateWatchlist,
  userExists
}

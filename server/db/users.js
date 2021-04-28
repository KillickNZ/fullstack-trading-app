const config = require('./knexfile').development
const connection = require('./connection')

// =========== BLOG-POST DB FUNCTIONS =========== //

const getUsers = (db = connection) => {
  // return (
  //     db('Posts')
  //     .select()
  //     .catch((err) => {
  //         console.log(err)
  //     })
  // )
};

const getUser = (username, password, db = connection) => {
  console.log('DB')
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

const addStocks = (obj, db = connection) => {
  // return (
  //     db('Posts')
  //     .insert(obj)
  //     .catch((err) => {
  //         console.log(err)
  //     })
  // )
}

const updateStocks = (id, title, paras, db = connection) => {
  // // console.log("id: ", id, "title: ", title)
  // return (
  //     db('Posts')
  //     .where("id", id)
  //     .update({"title": title},{"paragraphs": paras})
  //     .then(() => {
  //         return getBlogPost(id)
  //     })
  //     .catch((err) => {
  //         console.log(err)
  //     })
  // )
}

const deletePost = (id, db = connection) => {
  // db('Posts')
  // .where("id", id)
  // .del()
  // .catch((err) => {
  //     console.log(err)
  // })
}

// =========== COMMENT DB FUNCTIONS =========== //

module.exports = {
  getUser
}

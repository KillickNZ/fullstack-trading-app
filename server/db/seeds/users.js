exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'seb', hash: '123' , watchlist: '[TSLA, BTC, ETH]' },
        { id: 2, username: 'bas', hash: '456', watchlist: '[TSLA, BTC, ETH]'  },
        { id: 3, username: 'seebass', hash: '789', watchlist: '[TSLA, BTC, ETH]' }
      ])
    })
}

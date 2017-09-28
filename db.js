
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getBeers: getBeers,
  addBeers: addBeers
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}

function getBeers (connection) {
  return connection('beers').select()
}

function addBeers (beer, connection) {
  return connection('beers').insert(beer)
}
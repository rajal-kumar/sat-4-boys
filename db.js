
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getBeers: getBeers,
  addBeers: addBeers,
  getUsersPerBeer: getUsersPerBeer
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

function getUsersPerBeer(id, connection) {
  return connection('beers')
    .join('usersbeers', 'beers.beer_id', 'usersbeers.beer_id')
    .join('users', 'usersbeers.user_id', 'users.id')
    .select('users.name', 'users.id')
    .where('beers.beer_id', id)
}
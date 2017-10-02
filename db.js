
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getBeers: getBeers,
  getUsersPerBeer: getUsersPerBeer,
  getBeersPerUser: getBeersPerUser,
  addBeers: addBeers
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}

function getBeers (connection) {
  console.log('This is connection: ', connection);
  return connection('beers').select()
}
// return connection('beers').select()


function getUsersPerBeer (id, connection) {
  return connection('beers')
    .join('usersbeers', 'beers.beer_id', 'usersbeers.beer_id')
    .join('users', 'usersbeers.user_id', 'users.id')
    .select('users.name', 'users.id', 'usertriesbeer')
    .where('beers.beer_id', id)
    .andWhere('usertriesbeer', true)
}

function getBeersPerUser (id, connection) {
  return connection('users')
    .join('usersbeers', 'users.id', 'usersbeers.user_id')
    .join('beers', 'usersbeers.beer_id', 'beers.beer_id')
    .select('beers.beer_type', 'beers.beer_brand', 'beers.beer_image', 'beers.image', 'beers.beer_bio', 'usertriesbeer')
    .where('users.id', id)
    .andWhere('usertriesbeer', true)

}

function addBeers (beer, connection) {
  return connection('beers').insert(beer)
}

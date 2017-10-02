
exports.up = function(knex, Promise) {
  return knex.schema.createTable('usersbeerscomments', function (table) {
    table.integer('comment')
    table.string('user_id').references('users.user_id')
    table.string('beer_id').references('beers.beer_id')
    }
  )};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('usersbeerscomments')

};

exports.up = function (knex, Promise) {
  return knex.schema.createTable('beers', function (table) {
    table.increments('beer_id').primary()
    table.string('beer_name')
    table.string('alc_lvl')
    table.string('image')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}

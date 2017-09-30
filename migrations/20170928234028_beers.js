exports.up = function (knex, Promise) {
  return knex.schema.createTable('beers', function (table) {
    table.increments('beer_id').primary()
    table.string('beer_brand')
    table.string('beer_type')
    table.string('beer_image')
    table.string('image')
    table.string('beer_bio')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('beers')
}

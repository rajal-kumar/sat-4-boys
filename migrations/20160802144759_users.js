exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('github')
    table.string('usrimage')
    table.string('alias')
    table.string('superpower')
    table.string('backStory')

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}

exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({ id: 1001, name: 'Callan', github: 'callan-stretton' }),
        knex('users').insert({ id: 1002, name: 'Raj', github: 'rajal-kumar' }),
        knex('users').insert({ id: 1003, name: 'Joe', github: 'JosephJvB' }),
        knex('users').insert({ id: 1004, name: 'Richard', github: 'richardjohns' })
      ]);
    });
};
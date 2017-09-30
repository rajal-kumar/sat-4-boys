exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({ id: 1001, name: 'Callan', github: 'callan-stretton', usrimage: '/images/cal.png', userbio: '' }),
        knex('users').insert({ id: 1002, name: 'Raj', github: 'rajal-kumar', usrimage: '/images/raj.jpg', userbio: '' }),
        knex('users').insert({ id: 1003, name: 'Joe', github: 'JosephJvB', usrimage: '/images/joe.jpg', userbio: '' }),
        knex('users').insert({ id: 1004, name: 'Richard', github: 'richardjohns', usrimage: '/images/rich.jpg', userbio: '' })
      ]);
    });
};

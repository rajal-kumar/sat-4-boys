exports.seed = function (knex, Promise) {
  return knex('usersbeers').del()
    .then(function () {
      return Promise.all([
        knex('usersbeers').insert({
          user_id: 1001,
          beer_id: 99901,
          usertriesbeer: false,
          userlikesbeer: false
        }),
        knex('usersbeers').insert({
          user_id: 1001,
          beer_id: 99902,
          usertriesbeer: true,
          userlikesbeer: false
        }),
        knex('usersbeers').insert({
          user_id: 1001,
          beer_id: 99903,
          usertriesbeer: true,
          userlikesbeer: true
        }),
        knex('usersbeers').insert({
          user_id: 1001,
          beer_id: 99904,
          usertriesbeer: true,
          userlikesbeer: true
        }),
        knex('usersbeers').insert({
          user_id: 1001,
          beer_id: 99905,
          usertriesbeer: true,
          userlikesbeer: false
        }),
        knex('usersbeers').insert({
          user_id: 1001,
          beer_id: 99906,
          usertriesbeer: true,
          userlikesbeer: true
        }),

        knex('usersbeers').insert({
          user_id: 1002,
          beer_id: 99901,
          usertriesbeer: true,
          userlikesbeer: true
        }),
        knex('usersbeers').insert({
          user_id: 1002,
          beer_id: 99902,
          usertriesbeer: true,
          userlikesbeer: true
        }),
        knex('usersbeers').insert({
          user_id: 1002,
          beer_id: 99903,
          usertriesbeer: true,
          userlikesbeer: true
        }),
        knex('usersbeers').insert({
          user_id: 1002,
          beer_id: 99904,
          usertriesbeer: false,
          userlikesbeer: false
        }),
        knex('usersbeers').insert({
          user_id: 1002,
          beer_id: 99905,
          usertriesbeer: true,
          userlikesbeer: true
        }),
        knex('usersbeers').insert({
          user_id: 1002,
          beer_id: 99906,
          usertriesbeer: false,
          userlikesbeer: false
        }),

        knex('usersbeers').insert({
          user_id: 1003,
          beer_id: 99901,
          usertriesbeer: true,
          userlikesbeer: true
        }),
        knex('usersbeers').insert({
          user_id: 1003,
          beer_id: 99902,
          usertriesbeer: true,
          userlikesbeer: false
        }),
        knex('usersbeers').insert({
          user_id: 1003,
          beer_id: 99903,
          usertriesbeer: true,
          userlikesbeer: true
        }),
        knex('usersbeers').insert({
          user_id: 1003,
          beer_id: 99904,
          usertriesbeer: true,
          userlikesbeer: false
        }),
        knex('usersbeers').insert({
          user_id: 1003,
          beer_id: 99905,
          usertriesbeer: true,
          userlikesbeer: true
        }),
        knex('usersbeers').insert({
          user_id: 1003,
          beer_id: 99906,
          usertriesbeer: false,
          userlikesbeer: false
        }),

        knex('usersbeers').insert({
          user_id: 1004,
          beer_id: 99901,
          usertriesbeer: true,
          userlikesbeer: true
        }),
        knex('usersbeers').insert({
          user_id: 1004,
          beer_id: 99902,
          usertriesbeer: true,
          userlikesbeer: true
        }),
        knex('usersbeers').insert({
          user_id: 1004,
          beer_id: 99903,
          usertriesbeer: false,
          userlikesbeer: false
        }),
        knex('usersbeers').insert({
          user_id: 1004,
          beer_id: 99904,
          usertriesbeer: true,
          userlikesbeer: true
        }),
        knex('usersbeers').insert({
          user_id: 1004,
          beer_id: 99905,
          usertriesbeer: false,
          userlikesbeer: false
        }),
        knex('usersbeers').insert({
          user_id: 1004,
          beer_id: 99906,
          usertriesbeer: true,
          userlikesbeer: false
        }),
      ])
    })
}

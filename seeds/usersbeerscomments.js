exports.seed = function (knex, Promise) {
  return knex('usersbeerscomments').del()
    .then(function () {
      return Promise.all([
        knex('usersbeerscomments').insert({
          user_id: 1001,
          beer_id: 99901,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1001,
          beer_id: 99902,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1001,
          beer_id: 99903,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1001,
          beer_id: 99904,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1001,
          beer_id: 99905,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1001,
          beer_id: 99906,
          comment: 'Liked this alot'
        }),

        knex('usersbeerscomments').insert({
          user_id: 1002,
          beer_id: 99901,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1002,
          beer_id: 99902,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1002,
          beer_id: 99903,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1002,
          beer_id: 99904,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1002,
          beer_id: 99905,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1002,
          beer_id: 99906,
          comment: 'Liked this alot'
        }),

        knex('usersbeerscomments').insert({
          user_id: 1003,
          beer_id: 99901,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1003,
          beer_id: 99902,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1003,
          beer_id: 99903,
          comment: 'Liked this alot'

        }),
        knex('usersbeerscomments').insert({
          user_id: 1003,
          beer_id: 99904,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1003,
          beer_id: 99905,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1003,
          beer_id: 99906,
          comment: 'Liked this alot'
        }),

        knex('usersbeerscomments').insert({
          user_id: 1004,
          beer_id: 99901,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1004,
          beer_id: 99902,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1004,
          beer_id: 99903,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1004,
          beer_id: 99904,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1004,
          beer_id: 99905,
          comment: 'Liked this alot'
        }),
        knex('usersbeerscomments').insert({
          user_id: 1004,
          beer_id: 99906,
          comment: 'Liked this alot'
        }),
      ])
    })
}

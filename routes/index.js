var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', {
        users: users
      })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/beers', function (req, res) {
  db.getBeers(req.app.get('connection'))
    .then(function (beers, users) {
      console.log('This is users', users)
      res.render('beers', {
        beers: beers,
        users: users
      })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// router.get('/beers', function (req, res) {
//   db.getEverything(req.app.get('connection'))
//     .then((data) => {
//       const viewData = {
//         users: data[0],
//         beers: data[1],
//         usersbeers: data[2],
//       }
//       console.log(data[2])
//       res.render('beers', viewData)
//     })
//     .catch(function (err) {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

router.get('/users/:id', function (req, res) {
  const id = Number(req.params.id)

  db.getUsers(req.app.get('connection'))
    .select('users.id as userId', 'users.name', 'users.github')
    .where({
      'users.id': id
    })
    .first()
    .then(users => {
      res.render('viewuser', {
        users: users
      })
    })
})

router.get('/beers/:id', function (req, res) {
  const id = Number(req.params.id)
  
  db.getBeers(req.app.get('connection'))
    .select('beers.beer_id as beerId', 'beers.beer_brand', 'beers.beer_type', 'beers.beer_image', 'beers.image')
    .where({
      'beers.beer_id': id
    })
    .first()
    .then(beer => {
      db.getUsersPerBeer(id, req.app.get('connection'))
        .then(users => {
          console.log({beer, users})
          res.render('viewbeer', {beer, users})

        })
    })
})

router.get('/addbeer', function (req, res) {
  res.render('addbeer')
})

router.post('/addbeer', function (req, res) {
  db.addBeers(req.body, req.app.get('connection'))
    .then(function (beer) {
      res.redirect('/')
    })
})

module.exports = router

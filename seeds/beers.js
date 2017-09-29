exports.seed = function (knex, Promise) {
  return knex('beers').del()
    .then(function () {
      return Promise.all([
        knex('beers').insert({
          beer_id: 99901,
          beer_brand: 'Panhead',
          beer_type: 'Supercharger APA',
          beer_image: 'http://beerhealer.com/wp-content/uploads/2016/01/10727481_745451195529720_1542626673_n.jpg',
          image: 'http://brewersguild.org.nz/sites/default/files/imagecache/Logo_Main/Panhead.jpg'
        }),
        knex('beers').insert({
          beer_id: 99902,
          beer_brand: 'Tuatara',
          beer_type: 'Double-Trouble Extra-Dimensional APA',
          beer_image: 'https://i.ytimg.com/vi/4oXDWQnq5ps/maxresdefault.jpg',
          image: 'https://main-cdn.grabone.co.nz/goimage/440x267/ilkf4xpxp.jpg'
        }),
        knex('beers').insert({
          beer_id: 99903,
          beer_brand: 'Garage Project',
          beer_type: 'PillsnThrills Ale',
          beer_image: 'http://www.craftbeeronline.co.nz/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/g/a/garage_project_pils_n_thrills_can.jpg',
          image: 'https://yt3.ggpht.com/-s1vvPGecMQg/AAAAAAAAAAI/AAAAAAAAAAA/VRwcLH4ykQ8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'
        }),
        knex('beers').insert({
          beer_id: 99904,
          beer_brand: 'Monteiths',
          beer_type: 'Double Hopped IPA',
          beer_image: 'http://tschuessikowski.de/wp-content/uploads/2015/10/IMG_8467.jpg',
          image: 'http://www.voxy.co.nz/files/imagecache/news_item_image/files/Monteiths%20LOGO.jpg'
        }),
        knex('beers').insert({
          beer_id: 99905,
          beer_brand: 'Epic',
          beer_type: 'Armageddon IPA',
          beer_image: 'http://www.craftbeeronline.co.nz/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/e/p/epic_armageddon.jpg',
          image: 'http://www.fallingapple.org.nz/wp-content/uploads/2014/11/epic-logo-copy.jpg'
        }),
        knex('beers').insert({
          beer_id: 99906,
          beer_brand: 'Mata',
          beer_type: 'Wai-iti Waka NZ Pale Ale',
          beer_image: 'http://www.craftbeeronline.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/a/mata_wai_iti_nz_pale_ale.jpg',
          image: 'https://www.soba.org.nz/wordpress/wp-content/uploads/2012/06/Mata.jpg'
        })
      ])
    })
}

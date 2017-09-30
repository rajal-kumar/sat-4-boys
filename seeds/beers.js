exports.seed = function (knex, Promise) {
  return knex('beers').del()
    .then(function () {
      return Promise.all([
        knex('beers').insert({
          beer_id: 99901,
          beer_brand: 'Panhead',
          beer_type: 'Supercharger APA',
          beer_image: 'http://beerhealer.com/wp-content/uploads/2016/01/10727481_745451195529720_1542626673_n.jpg',
          image: 'http://brewersguild.org.nz/sites/default/files/imagecache/Logo_Main/Panhead.jpg',
          beer_bio: 'Hops are where it starts for the born-again craft head and Supercharger APA is where Panhead delivers. This is an all-American show with Centennial, Citra and Simcoe overwhelming your nose, kicking you in the taste buds and departing with more bitterness than a Palm Springs divorce. Its a seriously addictive combination'
        }),
        knex('beers').insert({
          beer_id: 99902,
          beer_brand: 'Tuatara',
          beer_type: 'Double-Trouble Extra-Dimensional APA',
          beer_image: 'https://i.ytimg.com/vi/4oXDWQnq5ps/maxresdefault.jpg',
          image: 'https://main-cdn.grabone.co.nz/goimage/440x267/ilkf4xpxp.jpg',
          beer_bio: 'If your answer to the question “how much hopping would you like?” is simply “more”, this is the beer that will make you careful what you wish for. Deceptively drinkable. Taste: Full flavoured, sweet, piney, spicy, citric and earthy. Long lingering bitter finish.'
        }),
        knex('beers').insert({
          beer_id: 99903,
          beer_brand: 'Garage Project',
          beer_type: 'PillsnThrills Ale',
          beer_image: 'http://www.craftbeeronline.co.nz/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/g/a/garage_project_pils_n_thrills_can.jpg',
          image: 'https://yt3.ggpht.com/-s1vvPGecMQg/AAAAAAAAAAI/AAAAAAAAAAA/VRwcLH4ykQ8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
          beer_bio: 'Pils n Thrills is the Garages irreverent take on the classic Bohemian Pilsner.German malts combined with American Summit hops create a refreshingly crisp, golden beer with a snappy bitterness and lifter lemon citrus notes.'
        }),
        knex('beers').insert({
          beer_id: 99904,
          beer_brand: 'Monteiths',
          beer_type: 'Double Hopped IPA',
          beer_image: 'http://tschuessikowski.de/wp-content/uploads/2015/10/IMG_8467.jpg',
          image: 'http://www.voxy.co.nz/files/imagecache/news_item_image/files/Monteiths%20LOGO.jpg',
          beer_bio: 'A bold IPA, with a concentrated malt flavour and sweetness. The higher alcohol gives real warmth which is boosted by the crisp high bitterness. Dry hopped with Cascade hops to give a big floral aroma finish.'
        }),
        knex('beers').insert({
          beer_id: 99905,
          beer_brand: 'Epic',
          beer_type: 'Armageddon IPA',
          beer_image: 'http://www.craftbeeronline.co.nz/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/e/p/epic_armageddon.jpg',
          image: 'http://www.fallingapple.org.nz/wp-content/uploads/2014/11/epic-logo-copy.jpg',
          beer_bio: 'In the beginning, there was nothing. Then an impish brewer piled a ludicrous amount of hops into a batch of beer. This zymurgical big bang is Epic Armageddon, an apocalyptic assault on your preconceptions and taste buds. It may be too huge for this fragile planet so enjoy this beer like it was the last one on Earth.'
        }),
        knex('beers').insert({
          beer_id: 99906,
          beer_brand: 'Mata',
          beer_type: 'Wai-iti Waka NZ Pale Ale',
          beer_image: 'http://www.craftbeeronline.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/a/mata_wai_iti_nz_pale_ale.jpg',
          image: 'https://www.soba.org.nz/wordpress/wp-content/uploads/2012/06/Mata.jpg',
          beer_bio: 'Wai-iti Waka is a showcase of NZ’s Wai-iti hop which fills the senses with enticing flavours and aromas of mandarin, lime and passionfruit. This Pale Ale is delicious on any occasion.'
        })
      ])
    })
}

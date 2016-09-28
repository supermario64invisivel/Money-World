var items = {
  click: {
    name: 'Click',
    price: 10,
    profit: 0.1,
    image: 'https://image.freepik.com/icones-gratis/ponteiro-do-mouse_318-48356.png',
    upgradeImage: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/699458-icon-27-one-finger-click-512.png'
  },
  worker: {
    name: 'Worker',
    price: 100,
    profit: 1,
    image: 'https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/worker.png',
    upgradeImage: 'http://www.clipartbest.com/cliparts/9iz/qRp/9izqRpEiE.png'
  },
  shop: {
    name: 'Shop',
    price: 1200,
    profit: 15,
    image: 'http://simpleicon.com/wp-content/uploads/shop-3.png',
    upgradeImage: ''
  },
  gold: {
    name: 'Gold',
    price: 16000,
    profit: 54,
    image: 'http://vignette3.wikia.nocookie.net/dragoncity/images/b/b0/Gold_Bar_Icon.png/revision/latest?cb',
    upgradeImage: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-silver-icons-media/003409-glossy-silver-icon-media-a-media29-record.png'
  },
  factory: {
    name: 'Factory',
    price: 210000,
    profit: 398,
    image: 'http://business-icon.com/highresolution/l_098.png',
    upgradeImage: 'https://image.freepik.com/free-icon/factory_318-47734.jpg'
  },
  lab: {
    name: 'Laboratory',
    price: 2800000,
    profit: 2346,
    image: 'https://openclipart.org/image/2400px/svg_to_png/22630/pitr-Lab-icon-3.png',
    upgradeImage: ''
  },
  world: {
    name: 'World',
    price: 40000000,
    profit: 15784,
    image: 'http://findicons.com/files/icons/98/nx11/256/internet_real.png',
    upgradeImage: ''
  },
  timeMachine: {
    name: 'Time Machine',
    price: 550000000,
    profit: 95432,
    image: 'http://worldartsme.com/images/time-icon-clipart-1.jpg',
    upgradeImage: ''
  },
  galaxy: {
    name: 'Galaxy',
    price: 8000000000,
    profit: 756894,
    image: 'https://openclipart.org/image/2400px/svg_to_png/211401/1420410744.png',
    upgradeImage: ''
  },
  hell: {
    name: 'Hell',
    price: 100000000000,
    profit: 6666666,
    image: 'http://icons.iconarchive.com/icons/mat-u/heaven-and-hell/128/HellLess-Networking-icon.png',
    upgradeImage: ''
  }
}

Object.keys(items).map(slug => {
  items[slug].quantity = 0
  items[slug].au = false
  items[slug].upgrades = []
  items[slug].initialPrice = items[slug].price
})

export default items

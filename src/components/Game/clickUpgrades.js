var clickUpgrades = [
  {
    price: 100,
    req: 100,
    effect: '*2'
  },
  {
    price: 500,
    req: 200,
    effect: '*2'
  },
  {
    price: 2500,
    req: 700,
    effect: '*2'
  },
  {
    price: 10000,
    req: 4000,
    effect: '*0.01profit'
  },
  {
    price: 500000,
    req: 500000,
    effect: '*0.01profit'
  },
  {
    price: 500000000,
    req: 1000000000,
    effect: '*0.01profit'
  },
  {
    price: 5000000000000,
    req: 50000000000000,
    effect: '*0.01profit'
  },
  {
    price: 50000000000000000,
    req: 500000000000000000,
    effect: '*0.01profit'
  },
  {
    price: 50000000000000000000,
    req: 500000000000000000000,
    effect: '*0.01profit'
  },
  {
    price: 50000000000000000000,
    req: 5000000000000000000000,
    effect: '*0.01profit'
  },
  {
    price: 50000000000000000000000,
    req: 5000000000000000000000000,
    effect: '*0.01profit'
  },
  {
    price: 50000000000000000000000000,
    req: 5000000000000000000000000000,
    effect: '*0.02profit'
  }
]

clickUpgrades.map(upgrade => upgrade.available = true)

export default clickUpgrades

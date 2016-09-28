<template lang="pug" src="./Game.pug" />
<style lang="sass" src="./Game.sass" />

<script>
import Item from '../Item/Item.vue'
import items from './items'
import clickUpgrades from './clickUpgrades'
import filter from 'lodash/filter'

export default {
  name: 'Game',

  data: () => ({
    money: 0,
    clickMoney: 0,
    clickProfit: 1,
    clickProfitPercent: 0,
    clickUpgrades,
    items
  }),

  components: { Item },

  computed: {

    availableClickUpgrades () {
      return filter(this.clickUpgrades, upgrade => (
        upgrade.available &&
        (this.clickMoney >= upgrade.req)
      ))
    },

    profitPerSecond () {
      var item, amount = 0
      for (var slug in this.items) {
        item = this.items[slug]
        amount += (item.quantity * item.profit)
      }
      return amount
    },

    clickProfitAmount () {
      return Math.floor(this.clickProfit + (this.clickProfitPercent * this.profitPerSecond))
    }

  },

  methods: {

    getClickProfit () {
      this.money += this.clickProfitAmount
      this.clickMoney += this.clickProfitAmount
    },

    buyClickUpgrade (upgrade) {
      if (upgrade.price > this.money) {
        return
      }
    
      this.money -= upgrade.price
      upgrade.available = false
      this.applyEffect(upgrade.effect)
    },

    buyItem (item) {
      var sellPrice = Math.floor(item.price)

      if (sellPrice > this.money) {
        return
      }

      this.money = this.money - sellPrice
      item.quantity++
      item.price *= 1.18
    },

    buyItemUpgrade (item, upgrade) {
      var price = Math.floor(item.initialPrice * upgrade.price)

      if (price > this.money) {
        return
      }

      this.money -= price
      item.upgrades.push(upgrade.req + (upgrade.au ? 'au' : ''))
      this.applyEffect(upgrade.effect, item)
    },

    getProfits () {
      this.money += this.profitPerSecond / 10
    },

    applyEffect(effect, item) {
      var match

      if (effect === 'au') {
        item.profit *= 7
        item.quantity -= 300
        item.price = item.initialPrice * 5
        for (var i = 0; i < item.quantity; i++) {
          item.price *= 1.18
        }
      }

      // multiply profit
      if (match = effect.match(/^\*([0-9.]+)$/)) {
        if (item) {
          item.profit *= match[1]
        } else {
          this.clickProfit *= match[1]
        }
        return
      }

      // percent of profitPerSecond
      if (match = effect.match(/^\*([0-9.]+)profit$/)) {
        this.clickProfitPercent += (match[1] * 1)
        return
      }
    }

  },
  mounted () {
    setInterval(() => this.getProfits(), 100)
  }
}
</script>

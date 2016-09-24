<template lang="pug" src="./Game.pug" />
<style lang="sass" src="./Game.sass" />

<script>
import Item from '../Item/Item.vue'
import items from './items'

export default {
  name: 'Game',

  data: () => ({
    money: 0,
    clickProfitAmount: 1,
    clickUpgradePrice: 50,
    items: items
  }),

  components: { Item },

  methods: {

    getClickProfit () {
      this.money += this.clickProfitAmount
    },

    buyClickUpgrade () {
      if (this.clickUpgradePrice > this.money) {
        return
      }
    
      this.money -= this.clickUpgradePrice
      this.clickProfitAmount *= 2
    },

    buyItem (item) {
      var sellPrice = Math.floor(item.price)

      if (sellPrice > this.money) {
        return
      }

      this.money = this.money - sellPrice
      item.quantity++
      item.price = item.price * 1.18
    },

    getProfits () {
      var item
      for (var slug in this.items) {
        item = this.items[slug]
        this.money += (item.quantity * item.profit) / 10
      }
    }

  },
  mounted () {
    setInterval(() => this.getProfits(), 100)
  }
}
</script>

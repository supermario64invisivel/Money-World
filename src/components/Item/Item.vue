<template lang="pug" src="./Item.pug" />
<style lang="sass" src="./Item.sass" />

<script>
import itemUpgrades from './itemUpgrades'
import filter from 'lodash/filter'
import findIndex from 'lodash/findIndex'

export default {
  name: 'Item',
  props: ['item'],
  data: () => ({
    itemUpgrades
  }),

  computed: {
    availableItemUpgrades () {
      return filter(this.itemUpgrades, upgrade => (
        (this.item.quantity >= upgrade.req) &&
        (upgrade.au ? item.au : true) &&
        (findIndex(this.item.upgrades, up => (up === upgrade.req + (upgrade.au ? 'au' : ''))) === -1)
      ))
    }
  },

  methods: {
    upgradePrice (item, upgrade) {
      return '$' + Math.floor(item.initialPrice * upgrade.price)
    }
  }

}
</script>

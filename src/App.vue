<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view/>
  </div>
</template>

<script>
import nav from '@/components/app-nav'

export default {
  name: 'app',
  components: {
    'app-nav': nav
  }
}
</script>

<style lang="sass" scoped>
div
  width: 100%
</style>
<template>
  <div class="nav">
    <div class="logo">logo</div>
      <div class="menu">
      <div class="tips">tips</div>
      <div class="plan">plan</div>
      <div class="pomodoro">pomodoro</div>
      <div class="user"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'nav'
}
</script>

<style lang="sass" scoped>
//TODO: mixin으로 뺄 것
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic')

$english-font: 'Helvetica', san-serif
$korean-font: 'Nanum Gothic', sans-serif

html
  font-size: 16px

.nav
  height: 60px
  line-height: 60px
  width: 70%
  margin: 0 auto
  text-transform: uppercase

  .logo
    float: left
    color: white
    font-size: 1.8em

  .menu
    display: inline
    float: right
    font-family: $english-font
    color: #83868E
    font-size: 1.18rem
    font-weight: bold

    .tips
      display: inline
      margin-right: 2.8vw
      
    .plan
      display: inline
      margin-right: 2.8vw

    .pomodoro
      display: inline
</style>
<template>
  <div class="main">
    <div class="container">
      <div class="outliner">
        <div class="outliner-text-set">
          <div class="main-title title-one">Le Voyage</div>
          <div class="main-title title-two">Dans</div>
          <div class="main-title title-three">La Lune<div class="dot"></div></div>
            
          <div class="main-slogan">In the heart of the French Alps,
                                  in the north east of the Rhone Alps region lies the village of Les Houches.
                                  Nestled at one end of the
          </div>
        </div>
      </div>

      <div class="travel-section">
        <div class="moon-textbox"></div>
        <div class="moon-text-title"></div>
        <div class="moon-sentence">
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main'
}
</script>

<style lang="sass">
//TODO: mixins으로 뺄 것
//google font
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic')
  
$english-font: 'Helvetica', san-serif
$korean-font: 'Nanum Gothic', sans-serif

html
  font-size: 16px

body
  width: 100%
  margin: 0
  padding: 0   
  background-color: rgb(20,27,48)
// mixins

.main
  height: 500vh
  margin: 0
  padding: 0

.container
  width: 75%
  margin: 0 auto

  .outliner
    width: 100%
    padding-top: 56.25%
    height: 0
    border: 15px
    position: relative
    margin: 0 auto
    border-color: rgba(151,120,96,100)
    box-shadow: 5px 5px 30px rgba(11,11,11,50)
    border-style: solid

    .outliner-text-set
      position: absolute
      top: 25%
      left: -6.6%
      width: 52.6%
      height: 66.1%
      // margin: 12.5vh -6.6%
      font-family: $english-font

      .main-title
        font-size: 7vw
        font-weight: bold
        color: rgb(132,164,196)
        line-height: 0.7em
        letter-spacing: -0.1em
        
      .title-three
        margin-bottom: 3.3%

      .dot
        display: inline-block
        border-radius: 50%
        width: 30px
        height: 30px
        background-color: #FDFC00
        margin: auto 2%
        padding: 0

      .main-slogan
        width: 80%
        // height: 80px
        font-size: 25px
        color: rgb(132,164,196)

//   .travel-section
//     .moon-textbox
//       // width: 600px
//       // color: rgb(217,217,217)
//       font-family: $korean-font
//       float: right
//       text-align: center
//       // margin-top: 186px
             
//     .moon-text-title
//       font-size: 45px
//       // margin: 1rem 0 1rem 0
        
//     .moon-sentence
//       font-size: 24px
//       // width: 600px
//       height: 90px

//       p
//         // margin: 0.5rem

// .icon-section
//   background-color: rgb(3,11,36)
//   // width: 430px
//   // height: 1600px
//   // margin-top: 186px
//   // margin-left: 150px
//   box-shadow: 2px 2px 22px rgba(0,0,0,50)
</style>

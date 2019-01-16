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
      <div class="vertical-section">
        <div class="rocket-icon">ROCKET-ICON</div>
      </div>
      <div class="horizontal-section first-section">
        <div class="function-title">
          달을 여행 할 준비
        </div>
        <div class="function-explained">
          우리의 목표가 달을 여행 하는 것이라고 상상해 보세요<br>
          달을 여행하기란 생각만큼 쉽지 않을겁니다<br>
          우리는 현실적이며 철저하게 준비 해야 합니다
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
  height: 300vh
  margin: 0
  padding: 0

  .container
    width: 78.7%
    margin: 0 auto

    .outliner
      width: 93%
      padding-top: 49.25%
      border: 1vw
      position: relative
      border-color: rgba(151,120,96,100)
      box-shadow: 0.3vw 0.3vw 2vw rgba(11,11,11,50)
      border-style: solid
      vertical-align: center

      .outliner-text-set
        position: absolute
        font-family: $english-font
        top: 18.5%
        left: -7.7%
        width: 52.6%

        .main-title
          font-size: 8.95vw
          font-weight: bold
          color: rgb(132,164,196)
          line-height: 0.7em
          letter-spacing: -0.1em
          
        .title-three
          margin-bottom: 3.3%

        .dot
          display: inline-block
          border-radius: 50%
          width: 2.5vw
          height: 2.5vw
          background-color: #FDFC00
          margin: auto 2%
          padding: 0

        .main-slogan
          width: 100%
          font-size: 1.73vw
          color: rgb(132,164,196)
    
  .vertical-section
    float: left
    // width: 38.5%
    width: 45%
    height: 175vh
    background-color: rgb(3, 11, 36)
    margin: 5% 2.5% 0 2.5%
    text-align: center
    z-index: 0
    box-shadow: 2px 2px 22px black
    padding-top: 8%
    color: gray

    .rocket-icon
      border: 1px solid gray
      width: 11.1vw
      height: 15.9vw
      margin: 0 auto

  .horizontal-section
    width: 45%
    float: right
    text-align: center
    font-family: $korean-font
    color: rgb(217,217,217)
    padding-top: 16.5%
    padding-right: 5%

    .function-title
      font-size: 2.8vw
      font-weight: bold
      
    .function-explained
      font-size: 1.5vw
      margin-top: 1.9vh
      line-height: 1.87vw

</style>

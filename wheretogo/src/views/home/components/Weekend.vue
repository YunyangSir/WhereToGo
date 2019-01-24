<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
  export default {
    name: "HomeWeekend",
    props: {
      list: Array
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrapper
        /*overflow: hidden*/
        /*height: 3rem*/
        /*position: ralative*/
        /*text-align: center*/
        /*padding-bottom: 40%*/
        height: 150px
        position: relative
        overflow: hidden
        .item-img
            /*width: 1.7rem*/
            /*height: 1.7rem*/
            /*padding: .1rem*/
            /*vertical-align: middle*/
            /*width: 100%*/
            position: absolute
            width: 100%
            top: 50%
            left: 0
            transform: translateY(-50%)
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()


</style>
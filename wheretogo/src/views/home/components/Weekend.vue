<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
    data () {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: 'https://m.tuniucdn.com/fb2/t1/G4/M00/2E/5B/Cii-VVmvhZyICHfAAAGs41QxX-EAAA46gOpw5MAAaz7857_w800_h0_c0_t0.jpg',
          title: '国色天香·陆地乐园',
          desc: '国色天香，天府之国，人间天堂'
        },{
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1512/3a/3ab83c0358208e8d90.img.jpg_200x200_14e2fbfd.jpg',
          title: '国色天香·陆地乐园',
          desc: '国色天香，天府之国，人间天堂'
        },{
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
          title: '国色天香·陆地乐园',
          desc: '国色天香，天府之国，人间天堂'
        },]
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        margin-top: .2rem
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
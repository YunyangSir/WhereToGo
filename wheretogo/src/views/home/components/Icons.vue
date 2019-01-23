<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.iconUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <!--<div class="swiper-pagination"  slot="pagination"></div>-->
        </swiper>
    </div>

</template>

<script>
  export default {
    name: "HomeIcons",
    data () {
      return {
        swiperOption: {
          // pagination: '.swiper-pagination',
          autoplay: false
        },
        iconList: [{
          id: '0001',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },{
          id: '0002',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          desc: '泡温泉'
        },{
          id: '0003',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '成都必游'
        },{
          id: '0004',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
          desc: '川剧变脸'
        },{
          id: '0005',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          desc: '峨眉山'
        },{
          id: '0006',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
          desc: '滑雪'
        },{
          id: '0007',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },{
          id: '0008',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
          desc: '熊猫基地'
        },{
          id: '0009',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
          desc: '太子岭'
        },{
          id: '0010',
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
          desc: '西岭雪山'
        },]
      }
    },
    computed: {
      pages () {
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .icons >>> .swiper-pagination-bullet-active
        background: $bgColor
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icon
        position: relative
        overflow: hidden
        float: left
        width: 25%
        height: 0
        padding-bottom: 25%
        background: #fff
        .icon-img
            position:absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            background: #fff
            .icon-img-content
                display: block
                margin: 0 auto
                height: 100%
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color: $darkTextColor
            ellipsis()


</style>
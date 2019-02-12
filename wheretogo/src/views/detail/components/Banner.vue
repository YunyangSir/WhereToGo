<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_600x330_5aa6e477.jpg"/>
            <div class="banner-info">
                <div class="banner-title">
                    国色天乡·陆地乐园
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe678;</span>
                    43
                </div>
            </div>
        </div>
        <common-gallary
            :imgs="imgs"
            v-show="showGallary"
            @close="handleGallaryClose"
        >
            gallary
        </common-gallary>
    </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
  export default {
    name: "Banner",
    components: {
      CommonGallary
    },
    data () {
      return {
        showGallary: false,
        imgs: ['//img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3' +
        '.img.jpg_600x330_5aa6e477.jpg',
          'https://m.tuniucdn.com/fb2/t1/G4/M00/2E/5B/Cii-VVm' +
          'vhZyICHfAAAGs41QxX-EAAA46gOpw5MAAaz7857_w800_h0_c0_t0.jpg']
      }
    },
    methods: {
      handleBannerClick () {
        this.showGallary = true;
      },
      handleGallaryClose () {
        this.showGallary = false;
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top,
                rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
            .banner-title
                flex: 1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number
                height: .32rem
                line-height: .32rem
                margin-top: .14rem
                padding: 0 .4rem
                border-radius: .2rem
                background: rgba(0, 0, 0, .8)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem
</style>
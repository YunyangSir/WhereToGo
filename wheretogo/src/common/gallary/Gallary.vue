<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide
                    v-for="(item, index) of imgs"
                    :key="index"
                >
                    <img class="gallary-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
  export default {
    name: "CommonGallary",
    props: {
      imgs: {
        type: Array,
        default () {
          return ['//img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_600x330_5aa6e477.jpg',
          'https://m.tuniucdn.com/fb2/t1/G4/M00/2E/5B/Cii-VVmvhZyICHfAAAGs41QxX-EAAA46gOpw5MAAaz7857_w800_h0_c0_t0.jpg']
        }
      }
    },
    data () {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          autoplay: false,
          observeParents: true,
          observer: true
        }
      }
    },
    methods: {
      handleGallaryClick () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 99
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        background: #000
        .wrapper
            width: 100%
            height: 0
            padding-bottom: 55%
            .gallary-img
                width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem
</style>
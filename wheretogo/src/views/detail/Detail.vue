<template>
    <div>
        <detail-banner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  import axios from 'axios'
  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailHeader,
      DetailList,
    },
    data () {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        list: [{
          title: '成人票',
          children: [{
            title: '成人三馆联票',
            children: [{
              title: '成人三馆联票-xx销售点'
            }]
          },{
            title: '成人五馆联票'
          }]
        },{
          title: '学生票',
          children: [{
            title: '学生二馆联票'
          },{
            title: '学生四馆联票'
          }]
        },{
          title: '儿童票',
          children: [{
            title: '儿童水上乐园套票'
          },{
            title: '水族馆儿童套票'
          }]
        },{
          title: '特惠票',
          children: [{
            title: '家庭三人特惠套票'
          },{
            title: '10人团队特惠套票'
          }]
        },]
      }
    },
    methods: {
      getDetailInfo () {
        axios.get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        }).then(this.handleGetDataSucc)
      },
      handleGetDataSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList

        }
      }
    },
    mounted () {
        this.getDetailInfo()
    },

  }
</script>

<style lang="stylus" scoped>
    .content
        height: 50rem
</style>
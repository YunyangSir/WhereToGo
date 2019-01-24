<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
  export default {
    name: "HomeRecommend",
    data () {
        return {
          recommendList: [{
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg',
            title: '国色天香·陆地乐园',
            desc: '国色天香，天府之国，人间天堂'
          },{
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1512/3a/3ab83c0358208e8d90.img.jpg_200x200_14e2fbfd.jpg',
            title: '花水湾四季温泉谷',
            desc: '花水湾四季温泉谷好玩巴适得板'
          },{
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
            title: '成都海昌极地公园',
            desc: '成都海昌极地公园，各种海洋生物等待与你相见'
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
    .item
        overflow: hidden
        display: flex
        height: 1.9rem
        background: #fff
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
            padding: .1rem
            min-width: 0
            .item-title
                line-height: .54rem
                font-size: .32rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #ccc
                ellipsis()
            .item-button
                line-height: .44rem
                margin-top: .16rem
                background: #ff9300
                padding: 0 .2rem
                border-radius: .06rem
                color: #fff


</style>
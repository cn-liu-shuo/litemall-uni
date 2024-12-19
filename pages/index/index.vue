<template>
  <view class="index">
    <!-- 搜索框 -->
    <van-search readonly placeholder="点击前往搜索" />
    <!-- 轮播图 -->
    <van-swipe style="height: 460rpx;" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <image style="width: 100%;height: 100%;" :src="item.url" mode=""></image>
      </van-swipe-item>
    </van-swipe>
  </view>
</template>

<script>
  import {
    homeIndex
  } from '../../config/api';
  export default {
    data() {
      return {
        // 轮播图
        banner: []
      }
    },
    onLoad() {
      // 初始化
      this.init()
    },
    methods: {
      // 初始化
      init() {
        homeIndex().then(res => {
          if (res.statusCode === 200) {
            console.log(res.data.data)
            this.banner = res.data.data.banner
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  // 页面颜色
  .index {
    background-color: #f2f2f2;
    width: 100%;
    height: 100%;
  }
</style>
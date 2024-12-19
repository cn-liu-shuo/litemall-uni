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
    <!-- 通道 -->
    <van-grid class="channel" :border="false" :column-num="6">
      <van-grid-item v-for="item in channel" :key="item.id">
        <image style="width: 40rpx;height: 40rpx;" :src="item.iconUrl"></image>
        <view style="font-size: 28rpx;">{{item.name}}</view>
      </van-grid-item>
    </van-grid>
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
        banner: [],
        // 通道
        channel: []
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
            this.channel = res.data.data.channel
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

  // 通道
  .channel {
    background-color: #fff;
    margin-top: 10rpx;
  }
</style>
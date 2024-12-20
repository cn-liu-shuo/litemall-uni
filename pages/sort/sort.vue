<template>
  <view class="sort">
    <!-- 搜索框 -->
    <van-search readonly placeholder="点击前往搜索" />
    <view class="content">
      <!-- 侧边导航 -->
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="item in categoryList" :key="item.id" :title="item.name" />
      </van-sidebar>
      <!-- 内容 -->
      <view class="desc">
        123
      </view>
    </view>
  </view>
</template>

<script>
  import {
    catalogIndex
  } from '../../config/api';
  export default {
    data() {
      return {
        activeKey: 0,
        categoryList: [],
        currentCategory: {},
        currentSubCategory: []
      }
    },
    onLoad() {
      this.init()
    },
    methods: {
      // 初始化
      init() {
        catalogIndex().then(res => {
          if (res.statusCode === 200) {
            console.log(res.data.data)
            this.categoryList = res.data.data.categoryList
            this.currentCategory = res.data.data.currentCategory
            this.currentSubCategory = res.data.data.currentSubCategory
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .content {
    display: flex;
  }
  // 侧边导航栏
  .van-sidebar {
    width: 200rpx;
    .van-sidebar-item {
      padding: 0;
      height: 80rpx;
      text-align: center;
      line-height: 80rpx;
      background-color: #fff;
      border-bottom: 1rpx solid #e5e5e5;
    }
    .van-sidebar-item--select {
      color: #db3d3c;
    }
    .van-sidebar-item--select::before {
      width: 2rpx;
      height: 100%;
    }
  }
</style>
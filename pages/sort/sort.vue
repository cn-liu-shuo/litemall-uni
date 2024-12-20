<template>
  <view class="sort">
    <!-- 搜索框 -->
    <van-search readonly placeholder="点击前往搜索" />
    <view class="content">
      <!-- 侧边导航 -->
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="item in categoryList" :key="item.id" :title="item.name" @click="onTabs(item.id)" />
      </van-sidebar>
      <!-- 内容 -->
      <view class="desc">
        <!-- 图片 -->
        <image style="width: 500rpx;height: 164rpx;" :src="currentCategory.picUrl"></image>
        <!-- 描述 -->
        <view style="font-size: 26rpx;padding: 20rpx 0;">{{currentCategory.desc}}</view>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="item in currentSubCategory" :key="item.id">
            <image style="width: 140rpx;height: 140rpx;" :src="item.picUrl"></image>
            <view style="font-size: 28rpx;">{{item.name}}</view>
          </van-grid-item>
        </van-grid>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    catalogIndex,
    catalogCurrent
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
      },
      // 侧边导航
      onTabs(id) {
        catalogCurrent(id).then(res => {
          if (res.statusCode === 200) {
            console.log(res.data.data);
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
    justify-content: space-between;
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

  .desc {
    width: 550rpx;
    text-align: center;
  }
</style>
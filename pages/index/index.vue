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
    <!-- 优惠券 -->
    <view class="coupon">
      <h2>优惠券</h2>
      <view class="coupon-item" v-for="item in coupon" :key="item.id">
        <view class="top">
          <view class="discount">￥ <text>{{item.discount}}元</text> </view>
          <view class="name">{{item.name}}</view>
        </view>
        <view class="bottom">
          {{item.desc}} - {{item.tag}}有效期：{{item.days}} 天
        </view>
      </view>
    </view>
    <!-- 团购专区 -->
    <van-cell style="margin-top: 40rpx;" title="团购专区" is-link value="更多团购商品" />
    <!-- 品牌直供商 -->
    <van-cell style="margin-top: 40rpx;" :border="false" title="品牌直供商" is-link value="更多品牌商" />
    <van-grid :column-num="2">
      <van-grid-item v-for="item in brand" :key="item.id">
        <image style="width: 280rpx;height: 160rpx;" :src="item.picUrl" mode=""></image>
        <view>{{item.name}}</view>
      </van-grid-item>
    </van-grid>
    <!-- 新品首发 -->
    <van-cell style="margin-top: 40rpx;" :border="false" title="新品首发" is-link value="更多新品首发" />
    <van-grid :border="false" :column-num="2">
      <van-grid-item v-for="item in newGoods" :key="item.id">
        <image style="width: 100%;height: 360rpx;" :src="item.picUrl" mode=""></image>
        <view style="font-size: 28rpx;color: #7b7474;">{{item.name}}</view>
        <view style="font-size: 28rpx;color: #ab956d;">￥{{item.retailPrice}}</view>
      </van-grid-item>
    </van-grid>
    <!-- 人气推荐 -->
    <van-cell style="margin-top: 40rpx;" :border="false" title="人气推荐" is-link value="更多人气推荐" />
    <view class="hotGoods" v-for="item in hotGoods" :key="item.id">
      <view class="left">
        <image style="width: 176rpx;height: 176rpx;" :src="item.picUrl"></image>
      </view>
      <view class="right">
        <view class="top">
          <view class="name">{{item.name}}</view>
          <view class="brief">{{item.brief}}</view>
        </view>
        <view class="bottom">
          <view class="retailPrice">￥<text>{{item.retailPrice}}</text>.00</view>
          <view class="counterPrice">￥{{item.counterPrice}}</view>
        </view>
      </view>
    </view>
    <!-- 专题精选 -->
    <van-cell style="margin-top: 40rpx;" :border="false" title="专题精选" is-link value="更多专题精选" />
    <van-grid :column-num="2">
      <van-grid-item v-for="item in topic" :key="item.id">
        <image style="width: 90%;" :src="item.picUrl" mode="widthFix"></image>
        <view style="font-size: 28rpx;color: #ab956d;">{{item.title}}</view>
        <view style="font-size: 20rpx;color: #ab956d;">{{item.subtitle}}</view>
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
        channel: [],
        // 优惠券
        coupon: [],
        // 品牌直供商
        brand: [],
        // 新品首发
        newGoods: [],
        // 人气推荐
        hotGoods: [],
        // 专题精选
        topic: []
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
            this.coupon = res.data.data.couponList
            this.brand = res.data.data.brandList
            this.newGoods = res.data.data.newGoodsList
            this.hotGoods = res.data.data.hotGoodsList
            this.topic = res.data.data.topicList
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

  // 优惠券
  .coupon {
    background-color: #fff;
    margin-top: 40rpx;
    padding-bottom: 20rpx;

    h2 {
      padding: 20rpx 32rpx;
      font-size: 28rpx;
      font-weight: 400;
    }

    .coupon-item {
      margin: 20rpx 32rpx;
      border: 2rpx solid #ff0000;
      padding: 50rpx 30rpx 30rpx;
      border-radius: 10rpx;

      .top {
        display: flex;

        .discount {
          font-size: 28rpx;
          color: #ff4444;
          margin-right: 20rpx;

          text {
            font-size: 48rpx;
          }
        }

        .name {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
      }

      .bottom {
        font-size: 24rpx;
        color: #969799;
      }
    }
  }

  // 人气推荐
  .hotGoods {
    background-color: #fff;
    display: flex;
    padding: 24rpx 32rpx;

    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .top {
        font-size: 28rpx;

        .name {
          color: #323233;
        }

        .brief {
          color: #646566;
        }
      }

      .bottom {
        display: flex;
        font-size: 24rpx;

        .retailPrice {
          text {
            font-size: 32rpx;
          }
        }

        .counterPrice {
          color: #969799;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          text-decoration: line-through;
          margin-left: 8rpx;
        }
      }
    }
  }
</style>
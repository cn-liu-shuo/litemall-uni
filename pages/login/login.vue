<template>
  <view class="login">
    <view class="store_header">
      <view class="store_avatar">
        <image src="../../static/image/avatar_default.89845f4e.png" mode=""></image>
      </view>
      <view class="store_name">litemall-vue</view>
    </view>
    <view class="field_group">
      <van-field v-model="username" clearable left-icon="user-o" placeholder="请输入测试账号user123" />
      <van-field v-model="password" clearable left-icon="closed-eye" placeholder="请输入测试密码user123" type="password" />
      <view class="clearfix">
        <view class="left" @click="onRegister">免费注册</view>
        <view class="right">忘记密码</view>
      </view>
      <van-button type="danger" size="large" @click="onLogin">登录</van-button>
    </view>
    <view class="text-desc">技术支持: litemall</view>
  </view>
</template>

<script>
  import {
    authLogin
  } from '../../config/api';
  export default {
    data() {
      return {
        username: null,
        password: null
      }
    },
    methods: {
      onLogin() {
        authLogin(this.username, this.password).then(res => {
          if (res.statusCode === 200) {
            console.log(res.data.data)
            uni.setStorageSync("token", res.data.data.token)
            uni.setStorageSync("nickName", res.data.data.userInfo.nickName)
            uni.switchTab({
              url: '/pages/my/my'
            })
          }
        })
      },
      onRegister() {
        uni.navigateTo({
          url: '/pages/register/register'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {
    position: relative;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 100rpx;
    box-sizing: border-box;
  }

  .store_header {
    text-align: center;
    padding: 60rpx 0;

    .store_avatar {
      text-align: center;

      image {
        width: 110rpx;
        height: 110rpx;
        border-radius: 50%;
      }
    }

    .store_name {
      padding-top: 10rpx;
    }
  }

  .field_group {
    padding: 0 30rpx;
  }

  .van-field {
    border: 2rpx solid #e5e5e5;
    border-radius: 10rpx;
    margin-bottom: 30rpx;

    .van-field__left-icon {
      margin-right: 20rpx;
    }
  }

  .clearfix {
    margin-bottom: 30rpx;
    font-size: 28rpx;
    display: flex;
    justify-content: space-between;
  }

  .text-desc {
    position: absolute;
    bottom: 60rpx;
    width: 100%;
    text-align: center;
    font-size: 24rpx;
    color: #999;
  }
</style>
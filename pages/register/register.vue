<template>
  <view>
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <view class="field_group">
      <view>我们将发送验证码到您的手机</view>
      <van-field v-model="mobile" clearable left-icon="friends-o" placeholder="请输入手机号" />
      <view class="register_submit">
        <van-button type="danger" size="large">下一步</van-button>
      </view>
      <view class="register_footer">已有账号？<text @click="onLogin">登录</text></view>
    </view>
    注册
  </view>
</template>

<script>
  export default {
    data() {
      return {
        mobile: null
      }
    },
    methods: {
      onClickLeft() {
        uni.navigateBack()
      },
      onLogin() {
        uni.navigateTo({
          url: '/pages/login/login'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .field_group {
    padding: 60rpx 30rpx 0 30rpx;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 100rpx;
    box-sizing: border-box;
    font-size: 28rpx;

    view {
      margin-bottom: 30rpx;
    }

    .van-field {
      border: 2rpx solid #e5e5e5;
      border-radius: 10rpx;
    }
  }

  .register_submit {
    padding: 60rpx 0 40rpx 0;
  }

  .register_footer {
    text-align: right;
    color: #999;

    text {
      color: #db3d3c;
    }
  }
</style>
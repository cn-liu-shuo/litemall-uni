<template>
  <view class="login">
    <view class="store_header">
      <view class="store_avatar">
        <image src="../../static/image/avatar_default.89845f4e.png" mode=""></image>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
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
  }
</style>
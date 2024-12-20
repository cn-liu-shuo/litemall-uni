<template>
  <view>
    
  </view>
</template>

<script>
  import { isLogin } from '../../utils/utils';
  export default {
    data() {
      return {
        
      }
    },
    onShow(){
      this.init()
    },
    methods: {
      // 页面初始化
      init(){
        isLogin()
      }
    }
  }
</script>

<style>

</style>

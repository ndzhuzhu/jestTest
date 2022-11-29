<template>
  <div class="home">
    <HelloWorld msg="随机数小游戏" hint= "猜测一个无重复数字的四位数"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style lang="less">
  .home{
    margin-top: 6rem
  }
</style>

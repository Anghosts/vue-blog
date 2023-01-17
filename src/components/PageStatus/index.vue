<template>
  <el-empty :description="msg" v-loading="loading" v-show="show" class="status"></el-empty>
</template>

<script>
export default {
  name: 'PageStatus',
  props: ['msg', 'loading', 'show']
}
</script>

<style lang="less" scoped>
.status {
  font-family: 'smiley-sans';
  background:#fff;
}
</style>
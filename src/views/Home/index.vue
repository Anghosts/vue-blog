<template>
  <div class="main-right">
    <Todolist />
  </div>
</template>

<script>
import Todolist from './Todolist'

export default {
  name: 'Home',
  components: {
    Todolist
  },
  data() {
    return {
      postList: []
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
.main-right {
  .index {
    .el-card__body {
      h4 {
        color: #6a6c71;
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #909399;
      }
    }
  }
}
</style>
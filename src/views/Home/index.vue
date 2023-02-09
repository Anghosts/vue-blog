<template>
  <div class="main-right">
    <Todolist />
    <el-button @click="request">发送请求</el-button>
    <img src="/favicon.ico" style="width:50px;height:50px;" ref="image"/>
  </div>
</template>

<script>
import Todolist from './Todolist'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Todolist
  },
  data() {
    return {
      postList: [],
      imgSrc: ''
    }
  },
  methods: {
    async request() {
      axios({
        url: '/api/Ext/Avatar/Show',
        method: 'POST',
        data: {
          app_key: '3CE54111653E1201A540717BEE66F1ED',
          nickname: 'host'
        },
        responseType: 'blob'
      }).then(result => {
        console.log(result);

        const reader = new FileReader()
        reader.readAsDataURL(result.data)
        reader.onload = () => {
          this.$refs.image.src = reader.result
        }
      },reason => reason)
    }
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
<template>
  <div class="main-right">
    
  </div>
</template>

<script>
import { reqGetArticleList } from '@/api';

export default {
  name: 'Home',
  data() {
    return {
      postList: []
    }
  },
  methods: {
    // 发送请求，获取文章数据
    async getArtList() {
      await reqGetArticleList({page: 1,limit: 20})
      .then((result) => {
        this.postList = result.data.list;
      }).catch((err) => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.getArtList();
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
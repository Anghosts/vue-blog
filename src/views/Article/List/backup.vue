<template>
  <div class="main-right">
    <el-timeline class="index">
      <el-timeline-item 
        :timestamp="post.time" 
        placement="top"
        color="#C0C4CC"
        v-for="post in postList"
        :key="post.id"
      >
        <el-card>
          <router-link :to="`/article/details/${post.id}`">{{post.title}}</router-link>
          <p>{{post.author}} 提交于 {{post.time}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
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
      a {
        font-weight: bold;
        font-size: 16px;
        color: #6a6c71;
        &:hover {
          text-decoration: none;
          color: #6f86d6 !important;
        }
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
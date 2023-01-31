<template>
  <div class="main-right">
    <h1 class="title">留言板</h1>
    <div class="msg-edit">
      <el-input class="textIpt" type="textarea" v-model="sendMsg" placeholder="说点什么" autosize></el-input>
      <el-button type="primary" class="send-btn" @click="commentsSend">发 布</el-button>
    </div>
    <div class="comments-content">
      <div class="comments-list">
        <div class="comments-item" v-for="comments in commentsInfo.list" :key="comments.id">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="userPortrait"></el-avatar>
          <div class="msgContent">
            <p class="userName">{{comments.user}}</p>
            <p class="comment">{{comments.msg}}</p>
            <div class="select">
              <div class="time" v-format-time="comments.time"></div>
            </div>
          </div>
        </div>
      </div>
      <el-pagination
        v-show="!loading"
        class="bottom-pagination"
        background
        layout="prev, pager, next"
        :current-page="page * 1"
        :page-size="limit"
        :total="commentsInfo.total"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
    <Copyright />
  </div>
</template>

<script>
import { reqGetComments,reqCommentsSave } from '@/api';

export default {
  name: 'Comments',
  data() {
    return {
      sendMsg: '',
      commentsInfo: {},
      page: 1,
      limit: 10,
      msg: '加载失败',
      show: false,
      loading: true
    }
  },
  watch: {
    // 监视路由路径，并根据路径变化自动发送请求，获取留言数据
    $route: {
      immediate: true,
      handler(route) {
        // 获取新的路由参数，提取跳转的页码，如果没有，则默认为当前页码
        this.page = route.params.page || this.page;
        this.getCommentsData();
      }
    }
  },
  methods: {
    // 发送请求，获取留言信息
    async getCommentsData() {
      await reqGetComments(this.page)
      .then(result => {
        this.commentsInfo = result.data;
        this.loading = false;
      }).catch(err => {
        console.log(err);
      })
    },
    // 留言发布
    async commentsSend() {
      // 内容不能为空
      if (!this.msg.trim()) return;
      await reqCommentsSave(this.sendMsg)
      .then(result => {
        if (result.code == 200) {
          this.getCommentsData();
        } else {
          console.log(result.msg);
        }
      }).catch(err => {
        console.log(err);
      })
      this.sendMsg = '';
    },
    // 分页器切换页码
    pageChange(pager) {
      // 跳转路由，并自动发起请求，重新获取留言内容
      this.$router.push(`/comments/page/${pager}`);
    }
  },
  directives: {
    // 自定义指令，去除留言时间的毫秒数
    'format-time'(element, binding) {
      let time = binding.value;
      element.innerText = time.substr(0, time.length-3)
    }
  },
  mounted() {
    // 获取留言信息
    this.getCommentsData();
  }
}
</script>

<style lang="less" scoped>
.main-right {
  .title {
    padding: 30px 0;
    margin-bottom: 5px;
    text-align: center;
    font-size: 1.4em;
    color: var(--text-color);
    border: 1px solid var(--border-color);
    background-color: var(--content-bg-color);
  }
  .msg-edit {
    display: flex;
    .textIpt {
      flex: 1;
    }
    .send-btn {
      margin-top: 0;
      margin-left: 10px;
      font-weight: 600;
      color: var(--text-white);
      border-color: var(--btn-default-bg);
      background-color: var(--btn-default-bg);
      &:hover {
        border-color: var(--btn-default-hover-bg);
        background-color: var(--btn-default-hover-bg);
      }
    }
  }
  
  .comments-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    .comments-list {
      flex: 1;
      padding-left: 5px;
      padding-top: 10px;
      border: 1px solid var(--border-color);
      background-color: var(--content-bg-color);
    }
    .bottom-pagination {
      margin: 5px 0;
      padding: 15px;
      text-align: center;
      border: 1px solid var(--border-color);
      background-color: var(--content-bg-color);
    }
    .comments-item {
      display: flex;
      padding: 10px;
      padding-left: 15px;
      &:last-child .msgContent {
        border: none;
      }
      
      .userPortrait {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        border: 1px solid #6f86d6;
      }
      .msgContent {
        flex: 1;
        padding: 10px;
        border-bottom: 1px solid var(--border-sw-color);
        color: #6b6b6b;
        text-align: justify;
        .userName {
          color: var(--text-color);
          font-size: 14px;
          margin-bottom: 15px;
        }
        .comment {
          font-size: 14px;
          color: var(--text-color);
        }
        .select {
          margin-top: 10px;
          color: #aaa;
          .time {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
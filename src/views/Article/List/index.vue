<template>
    <div class="main-right">
      <h1 class="title">文章</h1>
      <div class="top-menu">
        <div class="search">
          <label>
            <i class="el-icon-search"></i>
            <input type="text" placeholder="搜索文章">
          </label>
        </div>
        <div class="light-dark">
          <i class="el-icon-moon" v-if="theme === 'light'" @click="switchTheme('dark')"></i>
          <i class="el-icon-sunny" v-else @click="switchTheme('light')"></i>
        </div>
      </div>
      <div class="art-list-content">
        <div 
          v-for="post in postList.list" 
          :key="post.id" 
          class="art-item" 
          @click="detail(post.id)"
        >
          <div class="left">
            <h1>{{post.title}}</h1>
            <div class="time"><i class="el-icon-time"></i>{{post.time}}</div>
          </div>
          <div class="right">
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
      <el-pagination
        v-show="!loading"
        class="bottom-pagination"
        background
        layout="prev, pager, next"
        :page-size="6"
        :total="postList.total">
      </el-pagination>
      <Copyright />
    </div>
</template>

<script>
import 'animate.css';
import { reqGetArticleList } from '@/api';

export default {
 name: 'Article',
 data() {
  return {
    // 文章数据
    postList: {},
    loading: true,
    searchKeyword: '',
    theme: localStorage.getItem('theme')
  }
 },
 methods: {
  // 文章列表项点击回调
  detail(id) {
    this.$router.push(`/article/details/${id}`);
  },
  // 排序选择菜单
  handleSort(command) {
    this.dropVal.sort.name = command;
  },
  // 排序图标变化
  sortIcon() {
    this.dropVal.sort.isUp = !this.dropVal.sort.isUp;
  },
  // 发送请求，获取文章数据
  async getArtList() {
    await reqGetArticleList({page: 1,limit: 20})
    .then((result) => {
      // 保存文章数据
      this.postList = result.data;
      this.loading = false;
    }).catch((err) => {
      console.log(err);
      this.show = true;
    })
  },
  //  切换主题
  switchTheme(theme) {
    this.theme = theme;
    this.$bus.$emit('switchTheme', theme);
    localStorage.setItem('theme', theme);
  }
 },
 mounted() {
  this.getArtList();
 }
}
</script>

<style lang="less" scoped>
@mainWidth: 800px;
@textColor: #6a6c71;
@BG: #fff;

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
  .top-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    padding-left: 20px;
    height: 44px;
    line-height: 44px;
    border: 1px solid var(--border-color);
    background-color: var(--content-bg-color);
    
    .search {
      display: flex;
      align-items: center;
      height: 34px;
      i {
        color: var(--text-color);
      }

      input {
        font-family: 'smiley-sans';
        margin-left: 5px;
        font-size: 14px;
        color: var(--text-color);
        border: none;
        outline: none;
        background-color: var(--content-bg-color);
      }
    }

    .light-dark {
      i {
        color: var(--text-color);
        font-size: 20px;
        cursor: pointer;

        &:hover {
          color: #6f86d6;
        }
      }
    }
  }
  .art-list-content {
    &::after {
      content: '';
      display: table;
      clear: both;
    }
    .art-item {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 15px 20px;
      padding-right: 10px;
      float: left;
      width: 50%;
      height: 70px;
      border: 1px solid var(--border-color);
      border-top: 0;
      border-right: 0;
      background-color: var(--content-bg-color);
      cursor: pointer;
      &:nth-child(even) {
        border-right: 1px solid var(--border-color);
      }
      &:hover {
        color: var(--link-hover-color);
        .right i {
          color: var(--link-hover-color);
        }
        h1 {
          color: var(--link-hover-color) !important;
        }
      }
      .left {
        h1 {
          display: inline-block;
          color: var(--text-color);
          font-size: 1.05em;
          transition: color .2s;
        }
        .time {
          white-space: nowrap;
          margin-top: 5px;
          font-size: 12px;
          color: #999;
          i {
            margin-right: 3px;
          }
        }
      }
      .right {
        i {
          color: var(--text-color);
        }
      }
    }
  }
  .bottom-pagination {
    padding: 15px;
    text-align: center;
    border: 1px solid var(--border-color);
    border-top: none;
    background-color: var(--content-bg-color);
  }
}
</style>
<template>
  <div class="main-right">
    <el-page-header 
      @back="$router.push('/article/list')" 
      :content="detailList[1] && detailList[1].title" 
      class="page-head"
    ></el-page-header>
    <div class="detail-content">
      <template v-if="isContent">
        <div class="post-head">
          <h1>{{detailList[1].title}}</h1>
          <p class="art-info">
            <span class="time"><i class="el-icon-time"></i>发表于 {{detailList[1].time}}</span>
            <span class="classify">
              <i class="el-icon-location-outline"></i>
              分类于 <a href="javascript:;">{{detailList[1].classify}}</a>
            </span>
            <span class="author"><i class="el-icon-user"></i>{{detailList[1].author}}</span>
          </p>
        </div>
        <div class="post-main ic-main" v-html="postData"></div>
        <div class="post-footer">
          <div class="praise">
            <p>赞赏一根棒棒糖</p>
            <i class="el-icon-lollipop"></i>
          </div>
          <div class="post-nav">
            <div class="post-nav-item">
              <router-link 
                class="footer-link"
                :to="`/article/details/${detailList[0] && detailList[0].id}`" 
                v-show="detailList[0]"
              >
                <i class="el-icon-arrow-left"></i>{{detailList[0] && detailList[0].title}}
              </router-link>
            </div>
            <div class="post-nav-item">
              <router-link 
                class="footer-link"
                :to="`/article/details/${detailList[2] && detailList[2].id}`" 
                v-show="detailList[2]"
              >
                {{detailList[2] && detailList[2].title}} <i class="el-icon-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="empty"></div>
    <Copyright />
    <ScrollTop />
  </div>
</template>

<script>
import 'animate.css';
import { reqGetArtInfo,reqGetPostData } from '@/api';

export default {
  name: 'Details',
  data() {
    return {
      artId: null,
      detailList: [], // [0]: 上一篇，[1]: 本篇，[2]: 下一篇
      postData: '',
      isContent: false,
    }
  },
  methods: {
    // 获取文章数据
    async getData() {
      await reqGetArtInfo(this.artId)
      .then(async result => {
        if(result.code == 200) {
          this.detailList = result.data;
          // 获取文章详细内容
          this.postData = await reqGetPostData(this.detailList[1].postUrl);
          this.isContent = true;
        }
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    // 获取文章id
    this.artId = this.$route.params.id;
    if (isNaN(this.artId * 1)) {
      this.artId = '';
    }
    // 获取文章数据
    this.getData();
  }
}
</script>

<style lang="less" scoped>
@textColor: #666;
.main-right {
  position: relative;
  .page-head {
    padding: 10px 8px;
    // border-radius: 5px;
    color: var(--text-color);
    border: 1px solid var(--border-color);
    background-color: var(--content-bg-color);
  }
  .detail-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'smiley-sans';
    box-sizing: border-box;
    padding: 20px 30px 10px;
    font-size: 1.1em;
    color: @textColor;
    border: 1px solid var(--border-color);
    border-top: none;
    background-color: var(--content-bg-color);
    .post-head {
      >h1 {
        font-size: 1.4em;
        color: var(--text-color);
        text-align: center;
      }
      .art-info {
        margin-top: 8px;
        text-align: center;
        span {
          display: inline-block;
          padding: 0px 7px;
          font-size: 14px;
          line-height: 12px;
          color: #909399;
          border-right: 1px solid #909399;

          &:last-child {
            border: none;
          }
          i {
            font-weight: bold;
            margin-right: 3px;
          }
        }
        .classify {
          a:hover {
            color: #6f86d6 !important;
          }
        }
      }
    }
    .post-footer {
      margin-top: 15px;
      .praise {
        margin-bottom: 15px;
        text-align: center;
        p {
          color: var(--text-color);
          font-size: 16px;
        }
        i {
          padding: 10px;
          font-size: 26px;
          color: #da4453;
          cursor: pointer;
        }
      }
      .post-nav {
        display: flex;
        justify-content: space-between;
        padding-top: 5px;
        border-top: 1px solid #ccc;
        .post-nav-item {
          flex: 1;
          .footer-link {
            font-size: 14px;
            text-decoration: none;
            color: #999;
            transition: color .2s;
            &:hover {
              color: #6f86d6;
            }
            i {
              font-weight: 600;
            }
          }
          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }
  .empty {
    margin-top: 5px;
    height: 75px;
    // border-radius: 5px;
    border: 1px solid var(--border-color);
    background-color: var(--content-bg-color);
  }
}

</style>
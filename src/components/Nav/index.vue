<template>
  <div class="content-main">
    <div class="aside">
      <div class="header-nav">
        <div class="logo">
          <div class="nav-sw" @click="handleNav" :class="{show: isShowNav}"><i class="el-icon-arrow-down"></i></div>
          <h1><router-link to="/">Anghost</router-link></h1>
          </div>
        <nav class="nav" :class="{show: isShowNav}">
          <ul>
            <li :class="{active: activePath == '/'}" @click="handleRouter('/')"><i class="el-icon-s-home"></i>主页</li>
            <li :class="{active: activePath == 'article'}" @click="handleRouter('/article')"><i class="el-icon-tickets"></i>文章</li>
            <li :class="{active: activePath == 'classify'}" @click="handleRouter('/classify')"><i class="el-icon-folder-opened"></i>分类</li>
            <li :class="{active: activePath == 'comments'}" @click="handleRouter('/comments')"><i class="el-icon-chat-dot-square"></i>留言板</li>
            <li :class="{active: activePath == 'message'}" @click="handleRouter('/message')"><i class="el-icon-message"></i>消息中心</li>
          </ul>
        </nav>
      </div>
    </div>
    <transition 
      mode="out-in"
      name="start" 
    >
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
  
</template>

<script>
import 'animate.css';

export default {
  name: 'TopNav',
  data() {
    return {
      isShowNav: false,
      homeNav: false,
      activePath: '',
    }
  },
  mounted() {
    // 导航栏显示或隐藏事件
    this.$bus.$on('toggleNav', this.toggleNav);
    // 切换当前路由路径
    this.activePath = this.$route.fullPath.split('/')[1] || '/';
  },
  watch: {
    // 监视路由路径
    '$route.fullPath': {
      immediate: true,
      handler(path) {
        this.activePath = path.split('/')[1] || '/';
      }
    }
  },
  methods: {
    // 导航栏路由跳转
    handleRouter(path) {
      // 切换当前路由路径
      this.activePath = path.split('/')[1] || '/';
      this.$router.push(path);
    },
    // 导航的显示切换
    handleNav() {
      this.isShowNav = !this.isShowNav;
    }
  }
}
</script>

<style lang="less" scoped>
// 导航栏高度
@navHeight: 55px;
@BG: #fff;

.content-main {
  .header-nav {
    margin-bottom: 5px;
    width: 240px;
    font-family: 'smiley-sans';
    .logo {
      position: relative;
      display: flex;
      align-items: center;
      padding: 40px 0;
      text-align: center;
      background-color: var(--logo-bg-color);
      .nav-sw {
        display: none;
        position: absolute;
        left: 20px;
        color: #fff;
        font-size: 24px;
        cursor: pointer;
        transition: all .3s;
        transform-origin: center;
        &.show {
          transform: rotate(180deg);
        }
      }
      >h1 {
        flex: 1;
      }
      a {
        font-size: 28px;
        color: #fff;
      }
    }
    .nav {
      overflow: hidden;
      background-color: var(--content-bg-color);
      ul {
        margin: 15px 0;
        .active {
          color: #6f86d6;
          background-color: var(--menu-item-bg-color);
        }
        li {
          box-sizing: border-box;
          padding: 5px 20px;
          font-size: 16px;
          line-height: 2;
          color: var(--text-color);
          cursor: pointer;
          transition: color .3s, background .3s;
          &:hover {
            color: var(--link-hover-color);
            background-color: var(--menu-item-bg-color);
          }
          i {
            margin-right: 7px;
          }
        }
      }
      &.show {
        height: 240px;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .logo {
    .nav-sw {
      display: block !important;
    }
  }
  .nav {
    height: 0;
  }
}
</style>

<style scoped>
  /* 进入显示,离开隐藏 */
  .start-enter-active,
  .start-leave-active {
    transition: .4s;
  }
   /* 进入的起点 , 离开的终点 */
   .start-enter,
  .start-leave-to {
    opacity: 0;
    transform: translateX(10px);
  }
  /* 进入的终点 , 离开的起点 */
  .start-enter-to,
  .start-leave {
    opacity: 1;
    transform: translateX(0);
  }
</style>
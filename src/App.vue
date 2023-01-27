<template>
  <div id="app" :class="theme">
    <div class="color-bar"></div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      theme: ''
    }
  },
  methods: {
    // 切换主题事件回调
    switchTheme(theme) {
      this.theme = theme;
      // 改变滚动条样式
      document.documentElement.style.colorScheme = theme;
    }
  },
  mounted() {
    // 绑定切换主题的全局事件
    this.$bus.$on('switchTheme', this.switchTheme);
  }
}
</script>

<style lang="less">
@textColor: #2b2b2b;

#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  height: 100%;
  background-color: var(--body-bg-color);

  .color-bar {
    height: 3px;
    background-color: var(--theme-color);
  }
}

.content-main {
  position: relative;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  margin: 0 auto;
  width: calc(100% - 20px);
  min-height: calc(100vh - 3px);
  color: @textColor;
  .main-right {
    display: flex;
    flex-direction: column;
    // margin-top: 7px;
    width: calc(100% - 252px);
  }
}

@media screen and (max-width: 600px) {
  .art-list-content {
    flex-direction: column;
  }
  .art-item {
    width: 100% !important;
    border-right: 1px solid var(--border-color) !important;
    &:nth-child(2) {
      border-top: 0 !important;
    }
    h1 {
      font-size: 1em !important;
    }
  }
}
@media (max-width: 1000px) {
  .content-main {
    flex-direction: column;
    justify-content: start;
    .header-nav {
      width: 100% !important;
      .logo {
        flex: 1;
      }
    }
    .main-right {
      width: 100%;
      flex: 1;
    }
  }
  .ic-main {
    font-size: 1em !important;
  }
  .detail-content {
    padding: 15px 15px 10px !important;
    font-size: 1em !important;
  }
}
@media (min-width: 1300px) {
  .content-main {
    width: 1160px;
    .main-right {
      .detail-content {
        font-size: 1em !important;
      }
    }
  }
}
@media (min-width: 1600px) {
  .content-main {
    width: 1350px;
  }
  .nav ul li {
    font-size: 16px !important;
  }
}
</style>


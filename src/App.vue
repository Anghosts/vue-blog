<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {}
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
}

.content-main {
  position: relative;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  margin: 0 auto;
  width: calc(100% - 20px);
  min-height: 100vh;
  color: @textColor;
  .main-right {
    display: flex;
    flex-direction: column;
    margin-top: 7px;
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
  }
}
@media (min-width: 1600px) {
  .content-main {
    width: 1350px;
  }
  .nav ul li {
    font-size: 16px !important;
  }
  .art-item {
    width: 33.33% !important;
    &:nth-child(3) {
      border-top: 1px solid var(--border-color) !important;
    }
    &:nth-child(3n) {
      border-right: 1px solid var(--border-color) !important;
    }
    &:nth-child(even) {
      border-right: 0 !important;
    }
  }
}
</style>
>>>>>>> f4cc2dd (小更新)

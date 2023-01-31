<template>
  <div class="main-right">
    <div class="message-left">
      <router-view></router-view>
    </div>
    <div class="message-right">
      <div class="title"><i class="el-icon-s-promotion"></i>消息中心</div>
      <ul class="nav">
        <li>
          <a href="javascript:;" class="aItem active"><i class="el-icon-lollipop"></i>我的消息</a>
        </li>
        <li><a href="javascript:;" class="aItem"><i class="el-icon-watermelon"></i>系统通知</a></li>
        <li><a href="javascript:;" class="aItem"><i class="el-icon-s-tools"></i>消息设置</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
 name: 'Message',
 data() {
  return {
    bg: {
      background: 'url(/images/msgBg.jpg) top/cover no-repeat fixed'
    }
  }
 },
 mounted() {
  // 改变背景图片
  this.$bus.$emit('toggleBg', this.bg);
 }
}
</script>

<style lang="less" scoped>
.main-right {
  display: flex;
  flex-direction: row;
  margin-bottom: 7px;
  .message-left {
    flex: 1;
  }
  .message-right {
    overflow: hidden;
    margin-left: 10px;
    width: 130px;
    border-radius: 7px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffffc8;
    .title {
      margin: 20px 0;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      i {
        margin-right: 5px;
      }
    }
    .nav {
      margin-top: 5px;
      li {
        margin: 15px 0;
        text-align: center;
        font-size: 14px;
        color: #6b757b;
        font-weight: bold;
        
        .aItem {
          text-decoration: none;
          &.active {
            color: #6F86D6 !important;
          }
          &:hover {
            color: #6F86D6 !important;
          }
        }
        i {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
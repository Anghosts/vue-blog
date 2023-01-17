<template>
  <div class="copyright">
    <p>&copy; 2022 AnGhost.</p>
    <p><a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2022008423号</a></p>
  </div>
</template>

<script>
export default {
  name: 'Copyright',
}
</script>

<style lang="less" scoped>
.copyright {
  margin: 10px 0;
  text-align: center;
  p {
    line-height: 1.7;
    font-size: 14px;
    color: #999;
    a {
      color: #999;
      transition: color .2s;
      &:hover {
        text-decoration: none;
        color: #6f86d6;
      }
    }
  }
}
</style>
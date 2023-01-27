<template>
  <div class="main-right">
    <div class="classify">
      <h1 class="title">分类</h1>
      <ul class="classify-list">
        <li>
          <a href="javascript:;">Web开发 (0)</a>
        </li>
        <li>
          <a href="javascript:;">Web安全 (0)</a>
        </li>
        <li>
          <a href="javascript:;">程序设计 (0)</a>
        </li>
        <li>
          <a href="javascript:;">其它 (0)</a>
        </li>
      </ul>
      <div class="empty"></div>
      <Copyright />
    </div>
  </div>
</template>

<script>
export default {
 name: 'Classify'
}
</script>

<style lang="less" scoped>
.classify {
  .title {
    padding: 30px 0;
    text-align: center;
    font-size: 1.4em;
    color: var(--text-color);
    border: 1px solid var(--border-color);
    background-color: var(--content-bg-color);
  }
  .classify-list {
    margin-top: 5px;
    padding: 25px 40px;
    border: 1px solid var(--border-color);
    background-color: var(--content-bg-color);
    li {
      padding: 7px 0;
      font-size: 16px;
      color: var(--text-color);
      a {
        color: var(--text-color);
        border-bottom: 1px solid var(--text-color);
        text-decoration: none;
        &:hover {
          color: var(--link-hover-color) !important;
          border-color: var(--link-hover-color);
        }
      }
    }
  }
  .empty {
    margin-top: 5px;
    height: 75px;
    border: 1px solid var(--border-color);
    background-color: var(--content-bg-color);
  }
}
</style>
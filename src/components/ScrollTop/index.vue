<template>
  <el-button 
    class="scroll-top" 
    type="primary" 
    size="small " 
    icon="el-icon-arrow-up" 
    @click="scrollTop"
  ></el-button>
</template>

<script>
export default {
  name: 'ScrollTop',
  data() {
    return {
      timer: null,  // 定时器
      y: 0,
    }
  },
  methods: {
    // 返回顶部
    scrollTop() {
      this.timer = setInterval(() => {
        this.y = document.documentElement.scrollTop;
        let steps = (0 - this.y) / 10;
        steps = steps > 0 ? Math.ceil(steps) : Math.floor(steps);
        if (this.y <= 0) clearInterval(this.timer)
        document.documentElement.scrollTop = this.y + steps;
      }, 15)
    }
  }
}
</script>

<style lang="less" scoped>
.scroll-top {
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid var(--btn-default-bg);
  background-color: var(--btn-default-bg);
  &:hover {
    border: 1px solid var(--btn-default-hover-bg);
    background-color: var(--btn-default-hover-bg);
  }
}
</style>
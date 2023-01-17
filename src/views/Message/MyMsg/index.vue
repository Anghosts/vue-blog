<template>
  <div class="my-msg">
    <div class="msgView">
      <div class="title">标题</div>
      <div class="msgList">

      </div>
      <div class="msgEdit">
        <div class="sendAttr">
          <i class="el-icon-picture-outline-round"></i>
          <i class="el-icon-folder"></i>
        </div>
        <div class="msgTextarea">
          <textarea placeholder="回复一下吧~"></textarea>
        </div>
        <div class="msgSend">
          <el-button type="primary" size="small" class="sendBtn">发送</el-button>
        </div>
      </div>
    </div>
    <div class="userView">
      <div class="title">近期消息</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMsg'
}
</script>

<style lang="less" scoped>
.my-msg {
  overflow: hidden;
  display: flex;
  height: 100%;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  .msgView {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    border-right: 1px solid #ddd;
    .title {
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
      border-bottom: 1px solid #ddd;
    }
    .msgList {
      flex: 1;
      background-color: #f4f5f7;
    }
    .msgEdit {
      min-height: 149px;
      border-top: 1px solid #ddd;
      background-color: #f4f5f7;
      .sendAttr {
        padding: 5px 15px 0;
        i {
          margin-right: 12px;
          font-size: 25px;
          color: #999;
          cursor: pointer;
          &:hover {
            color: #409EFF;
          }
        }
      }
      .msgTextarea {
        padding: 10px 10px 5px;
        padding-left: 15px;
        textarea {
          width: 100%;
          height: 60px;
          font-size: 14px;
          resize: none;
          border: none;
          outline: none;
          background-color: transparent;
        }
      }
      .msgSend {
        padding-right: 10px;
        text-align: right;
        .sendBtn {
          padding: 9px 20px;
        }
      }
    }
  }
  .userView {
    width: 180px;
    .title {
      padding-right: 10px;
      height: 40px;
      line-height: 40px;
      text-align: right;
      font-size: 12px;
      border-bottom: 1px solid #ddd;
      color: #999;
    }
  }
}
</style>
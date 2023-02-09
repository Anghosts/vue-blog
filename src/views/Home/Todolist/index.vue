<template>
  <div class="todolist">
    <div class="todo">
      <div class="header">
        <h1>待办</h1>
        <i class="el-icon-plus i-icon" title="添加" @click="addTodo"></i>
      </div>
      <div class="todo-content">
        <ul v-if="todoBeCheckList.length !== 0">
          <li 
            v-for="(todoItem,index) in todoBeCheckList" 
            :key="todoItem.id"
            @mouseenter="todoBtnIndex = todoItem.id"
            @mouseleave="todoBtnIndex = null"
          >
            <div class="todo-left" v-show="!todoItem.isEdit">
              <span>{{todoItem.title}}</span>
              <span class="time">{{todoItem.time}}</span>
              <i 
                class="el-icon-edit i-icon" 
                title="编辑"
                v-show="todoBtnIndex===todoItem.id"
                @click="editTodo(todoItem.id,index)"
              ></i>
            </div>
            <input 
              type="text" 
              class="todo-edit"
              v-show="todoItem.isEdit"
              @blur="blurTodo(todoItem.id)"
              @keydown.enter="blurTodo(todoItem.id)"
              ref="todoEdit"
              v-model="todoItem.title"
            >
            <div class="todo-right">
              <i 
                class="el-icon-delete i-icon" 
                title="删除" 
                v-show="todoBtnIndex===todoItem.id && !todoItem.isEdit"
                @click="removeTodo(todoItem.id)"
              ></i>
              <i class="el-icon-check i-icon" title="标记完成" 
                @click="checkTodo(todoItem.id)" v-show="!todoItem.isEdit"
              ></i>
            </div>
          </li>
        </ul>
        <div class="todo-empty" v-else>
          <p>无待办事项</p>
        </div>
      </div>
    </div>
    <div class="todo-check">
      <div class="header">
        <h1>已完成</h1>
      </div>
      <div class="todo-content">
        <ul v-if="todoCheckList.length !== 0">
          <li 
            v-for="(todoItem) in todoCheckList" 
            :key="todoItem.id"
            @mouseenter="todoBtnIndex = todoItem.id"
            @mouseleave="todoBtnIndex = null"
          >
            <div class="todo-left">
              <span>{{todoItem.title}}</span>
              <span class="time">{{todoItem.time}}</span>
            </div>
            <div class="todo-right">
              <i 
                class="el-icon-delete i-icon" 
                title="删除" 
                v-show="todoBtnIndex===todoItem.id"
                @click="removeTodo(todoItem.id, true)"
              ></i>
            </div>
          </li>
        </ul>
        <div class="todo-empty" v-else>
          <p>无已完成事项</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      todolist: JSON.parse(localStorage.getItem('todolist')) || [],    // 所有的todo项,
      todoCheckList: [],    // 完成的 todo 项
      todoBtnIndex: null,   // 待办项显示隐藏按钮的索引
      todoId: 0,            // id
    }
  },
  computed: {
    // 未完成的 todo 项
    todoBeCheckList() {
      return this.todolist.filter(item => !item.isCheck)
    }
  },
  methods: {
    // 获取当前时间
    getDate() {
      let nowdate = new Date()
      let year = nowdate.getFullYear(),
          month = nowdate.getMonth() + 1,
          date = nowdate.getDate(),
          h = nowdate.getHours(),
          m = nowdate.getMinutes();
      m = m > 10 ? m : '0' + m
      return `${year}-${month}-${date} ${h}:${m}`
    },
    // 编辑 todo
    editTodo(id, index) {
      this.todoBeCheckList.forEach(item => {
        if (item.id === id) { item.isEdit = true }
      })
      this.$nextTick(() => {
        // input 框获取焦点
        this.$refs.todoEdit[index].focus()
      })
    },
    // 取消编辑 todo
    blurTodo(id) {
      this.todolist.forEach(item => {
        if (item.id === id) { 
          if (item.title) {
            // 如果有内容，则取消编辑模式
            item.isEdit = false 
          } else {
            // 如果输入的内容为空，则删除该项
            this.removeTodo(id)
          }
        }
      })
      this.saveData()
    },
    // 添加 todo 项
    addTodo() {
      let obj = {
        id: this.todoId,
        title: '',
        time: this.getDate(),
        isCheck: false,
        isEdit: true
      }
      // 保存数据
      this.todolist.push(obj)
      this.saveData()
      // id 加1
      this.todoId++
      this.$nextTick(() => {
        // input 框获取焦点
        this.$refs.todoEdit[this.todoBeCheckList.length-1].focus()
      })
    },
    // 删除 todo 项
    removeTodo(id,check=false) {
      this.todolist.forEach((item,index) => {
        if (item.id === id) { this.todolist.splice(index,1) }
      })
      if (check) {
        this.todoCheckList.forEach((item,index) => {
          if (item.id === id) { this.todoCheckList.splice(index,1) }
        })
      }
      this.saveData()
    },
    // 标记完成 todo 项
    checkTodo(id) {
      this.todolist.forEach(item => {
        if (item.id === id) {
          // 更改为完成
          item.isCheck = true
          // 重新获取时间
          item.time = this.getDate()
          // 添加到已完成的todo项中
          this.todoCheckList.push(item)
        }
      })
      this.saveData()
    },
    // 保存数据到本地
    saveData() {
      localStorage.setItem('todolist', JSON.stringify(this.todolist))
    }
  },
  mounted() {
    // 获取已完成的 todo 项
    this.todoCheckList = this.todolist.filter(item => item.isCheck)
  }
}
</script>

<style lang="less" scoped>
.todolist {
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--border-color);
  background-color: var(--content-bg-color);

  .i-icon {
    color: var(--text-color);
    transition: all .3s;
    &:hover {
      cursor: pointer;
      transform: scale(1.5);
      color: var(--theme-color);
    }
  }
  .todo-empty {
    p {
      margin: 25px 0;
      text-align: center;
      color: #909399;
    }
  }
  .todo {
    flex: 1;
    .header {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border-color);
      h1 {
        color: var(--text-color);
        font-size: 1.05em;
      }
    }
  }
  .todo-content {
    padding: 5px 0;
    color: var(--text-color);
    ul {
      flex: 1;
      li {
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        height: 38px;
        padding: 0px 25px;
        font-size: 16px;
        transition: all .15s;
        &:hover {
          background-color: var(--menu-item-bg-color);
        }
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          border-radius: 5px;
          background-color: var(--text-color);
        }
        .todo-left {
          i {
            margin-left: 10px;
          }
          .time {
            margin-left: 10px;
            color: #909399;
            font-size: 12px;
          }
        }
        .todo-edit {
          padding: 0 5px;
          height: 80%;
          border-radius: 5px;
          border: 1px solid var(--card-bg-color);
          outline: none;
          color: var(--text-color);
        }
        .todo-right {
          i {
            padding: 0 8px;
            &:last-child {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
  .todo-check {
    flex: 1;
    border-left: 1px solid var(--border-color);
    .header {
      color: var(--text-color);
      padding: 10px;
      border-bottom: 1px solid var(--border-color);

      h1 {
        font-size: 1.05em;
      }
    }
  }
}
</style>
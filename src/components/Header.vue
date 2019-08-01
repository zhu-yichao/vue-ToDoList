<template>
  <header class="header">
    <div class="info-container">
      <label for="title">ToDoList</label>
      <input type="text" placeholder="添加ToDo" v-model="value" @keydown="addTodoItem">
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      value: ''
    }
  },
  components: {
  },
  methods:{
    addTodoItem(el){
      if(el.keyCode ===13) {
        this.$store.commit('addToDoItem', this.value)
        this.value = ''
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    height: 50px
    background: #333
    background: rgba(47,47,47,0.98)
    .info-container
      width 600px
      margin auto
    label
      float: left
      width: 100px
      line-height: 50px
      color: #DDD
      font-size: 24px
      cursor: pointer
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif
    input
      float: right
      width: 60%
      height: 24px
      margin-top: 12px
      text-indent: 10px
      border-radius: 5px
      box-shadow: 0 1px 0 rgba(255,255,255,0.24), 0 1px 6px rgba(0,0,0,0.45) inset
      border: none
</style>

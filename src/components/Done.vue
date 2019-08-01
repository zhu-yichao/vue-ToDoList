<template>
  <div class="done-list">
    <h2>已经完成<span></span></h2>
    <ol>
      <li class="done-item" v-for="(item, i) in doneList" :key="i">
        <input type="checkbox" checked="checked" ref="checkbox" @change="doingItem(item)">
        <p>{{item}}</p>
        <span @click="deleteItem(item)">-</span>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Doing',
  components: {
  },
  computed:{
    ...mapState(['doneList'])
  },
  methods:{
    doingItem(item) {
      this.$store.commit('setItemDoing', item)
      this.$refs.checkbox.forEach(item => item.checked = true)
    },
    deleteItem(item){
      let commitParams = {
        type:'doneList',
        item
      }
      this.$store.commit('deleteItem', commitParams)
    },
  }
}
</script>
<style lang="stylus" scoped>
  .done-list
    width 600px
    margin auto
    .done-item
      height: 32px;
      line-height: 32px;
      background: #fff;
      position: relative;
      margin-bottom: 10px;
      padding: 0 45px;
      border-radius: 3px;
      border-left: 5px solid #629A9C;
      box-shadow: 0 1px 2px rgba(0,0,0,0.07);
      border-left: 5px solid #999;
      opacity: 0.5;
      input
        position: absolute;
        top: 2px;
        left: 10px;
        width: 22px;
        height: 22px;
        cursor: pointer;
      span
        position: absolute;
        top: 2px;
        right: 5px;
        display: inline-block;
        width: 14px;
        height: 12px;
        border-radius: 14px;
        border: 6px double #FFF;
        background: #CCC;
        line-height: 14px;
        text-align: center;
        color: #FFF;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
</style>

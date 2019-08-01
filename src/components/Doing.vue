<template>
  <div class="doing-list">
    <h2>正在进行 <span></span></h2>
    <ol>
      <li class="doing-item" v-for="(item, i) in doingList" :key="i">
        <input type="checkbox" @change="doneItem(item)" ref="checkbox">
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
  computed:{
    ...mapState(['doingList'])
  },
  methods:{
    doneItem(item){
      this.$refs.checkbox.forEach(item => {item.checked = false})
      this.$store.commit('setItemDone', item)
    },
    deleteItem(item){
      let commitParams = {
        type:'doingList',
        item
      }
      this.$store.commit('deleteItem', commitParams)
    },
  }
}
</script>
<style lang="stylus" scoped>
.doing-list
  width 600px
  margin auto
  .doing-item
    height: 32px;
    line-height: 32px;
    background: #fff;
    position: relative;
    margin-bottom: 10px;
    padding: 0 45px;
    border-radius: 3px;
    border-left: 5px solid #629A9C;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
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

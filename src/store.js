import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    doneList: JSON.parse(window.localStorage.getItem('doneList')) || [],
    doingList: JSON.parse(window.localStorage.getItem('doingList')) || [],
  },
  mutations: {
    addToDoItem(state,params){
      state.doingList.push(params)
      localStorage.setItem('doingList',JSON.stringify(state.doingList))
    },
    setItemDone(state,params) {
      state.doneList.push(params)
      state.doingList.splice(state.doingList.indexOf(params),1)
      localStorage.setItem('doneList',JSON.stringify(state.doneList))
    },
    setItemDoing(state,params){
      state.doingList.push(params)
      state.doneList.splice(state.doneList.indexOf(params),1)
      localStorage.setItem('doingList',JSON.stringify(state.doingList))
    },
    deleteItem(state,params){
      state[params.type].forEach((item,i) => {
        if(state[params.type][i] === params.item){
          state[params.type].splice(i,1)
        }
      })
      localStorage.setItem(params.type,JSON.stringify(state[params.type]))
    }
  },
  actions: {

  }
})

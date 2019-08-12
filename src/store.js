import Vue from 'vue'
import Vuex from 'vuex'
import { Agent } from 'https';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    age: 0
  },
  mutations: {
    addCount(state,obj){
      return state.count += obj.num;
      // return state.count++
    },
    subCount(state,obj){
      return state.count -= obj.num;
      // return state.count--
    }
  },
  actions: {
    addCountasy(context){
      setTimeout(()=>{
      context.commit('addCount',{
        num: 2
      })
      },2000)
    },
    subCountasy(context){
      setTimeout(() => {
        context.commit('subCount',{
          num: 2
        })
      }, 2000);
    }
  },
  getters: {
    getterAge(state){
      return state.age += 10
    }
  }
})

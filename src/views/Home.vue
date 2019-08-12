<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>通过getter获取:{{getterAge}}</h1>
    <h1>{{count}}</h1>
    <button @click="handlerAdd({num: 2})">增加</button>
    <button @click="handlerSub({num: 2})">减少</button>
    <button @click="handlerAddasy()">异步增加(2s后执行)</button>
    <button @click="handlerSubasy()">异步减少(2s后执行)</button>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapState,mapGetters, mapMutations} from 'vuex'

export default {
  name: 'home',
  computed:{
    // count(){
    //   return this.$store.state.count
    // },
    ...mapState([
      'count'
    ]),

    // getter

    // getCount(){
    //   return this.$store.getters.getterAge
    // }
    ...mapGetters([
      'getterAge'
    ])
  },
  methods: {

    //mutations

    // handlerAdd(){
    //   this.$store.commit('addCount',{
    //     num : 2
    //   })
    // },
    // handlerSub(){
    //   this.$store.commit('subCount',{
    //     num : 2
    //   })
    // },
    // handlerAdd(){
    //   this.$store.commit('addCount')
    // },
    // handlerSub(){
    //   this.$store.commit('subCount')
    // }
    ...mapMutations({
      handlerAdd: 'addCount',
      handlerSub: 'subCount'
    }),

    //actions
    
    // handlerAddasy(){
    //   this.$store.dispatch('addCountasy')
    // },
    // handlerSubasy(){
    //   this.$store.dispatch('subCountasy')
    // }
    ...mapActions({
      handlerAddasy: 'addCountasy',
      handlerSubasy: 'subCountasy'
    })
  },
}
</script>

<style lang="less" scoped>
  button{
    margin-left: 10px;
  }
</style>



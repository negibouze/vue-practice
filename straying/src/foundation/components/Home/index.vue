<template>
  <div>
    ホーム
    <span>{{ count }}</span>
    <div>
      <button @click="up">up</button>
      <button @click="decrement">down</button>
      <button @click="up10">+10</button>
      <button @click="decrementBy({ amount: 10 })">-10</button>
      <button @click="upAsync">up async</button>
    </div>
    <span>これはローカルのコンピューテッド: {{ localComputed }}</span>
    <div>{{ radius }}</div>
    <div>{{ message }}</div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      message: ''
    }
  },
  computed: {
    localComputed() {
      return 'localComputed'
    },
    ...mapState({
      count: state => state.count
    }),
    ...mapState('circle', {
      radius: state => state.radius
    })
  },
  watch: {
    radius(newValue) {
      this.message = `Radius has changed to ${newValue}`
    }
  },
  methods: {
    up() {
      this.$store.dispatch('increment')
    },
    upAsync() {
      this.message = ''
      this.$store.dispatch('incrementAsync').then(() => {
        this.message = 'Asynchronous processing is complete.'
      })
    },
    up10() {
      this.$store.dispatch({
        type: 'incrementBy',
        amount: 10
      })
      // this.$store.commit({
      //   type: 'incrementBy',
      //   amount: 10
      // })
    },
    ...mapMutations([
      'decrement',
      'decrementBy'
    ]),
    ...mapActions([
      // 後勝ちだった
      'decrementBy'
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import './style'
</style>

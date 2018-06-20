<template>
  <div>
    <message :msg="msg"></message>
    <button id="toggle-message" @click="toggleMessage">
      Change message
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Message from '@/components/atoms/Message.vue'
export default Vue.extend({
  name: 'message-toggle',
  components: {
    Message
  },
  data: () => ({
    msg: ''
  }),
  methods: {
    toggleMessage(): void {
      this.msg = this.msg === 'message' ? 'toggled message' : 'message'
    }
  }
})
</script>

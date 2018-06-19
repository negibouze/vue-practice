<template>
  <div>
    <message :msg="msg"></message>
    <button id="toggle-message" @click="toggleMessage">
      Change message
    </button>
  </div>
</template>

<script lang="ts">
import Message from '@/components/atoms/Message.vue'
export default {
  name: 'message-toggle',
  data: () => ({
    msg: null
  }),
  methods: {
    toggleMessage(): void {
      this.msg = this.msg === 'message' ? 'toggled message' : 'message'
    }
  },
  components: {
    Message
  }
}
</script>

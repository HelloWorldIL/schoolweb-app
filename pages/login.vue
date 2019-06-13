<template lang="pug">
  v-flex(xs12 sm10 md8 lg5 xl4)
    v-container(fluid)
      v-layout(column)
        v-flex
          v-alert(class="mb-0" transition="slide-y-reverse-transition" type="error" :value="error !=''") {{error}}
        v-flex
          login(@error="handleError")
</template>

<script>
import login from '~/components/login.vue'

export default {
  components: {
    login
  },
  data: function() {
    return {
      error: ''
    }
  },
  methods: {
    handleError(error) {
      this.error = error
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.error = ''
      }, 10000)
    }
  }
}
</script>

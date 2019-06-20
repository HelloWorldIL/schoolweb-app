<template lang="pug">
  v-flex(xs12 sm10 md8 lg5 xl4)
    v-container(fluid)
      v-layout(column)
        v-flex
          v-alert(class="mb-0" transition="slide-y-reverse-transition" type="error" :value="error !=''") {{error}}
        v-flex
          login(@error="handleError" @signUp="signUp")
</template>

<script>
import login from '~/components/login.vue'
import signup from '~/components/signup'

export default {
  components: {
    login,
    signup
  },
  meta: {
    auth: -1
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
    },
    signUp() {}
  }
}
</script>

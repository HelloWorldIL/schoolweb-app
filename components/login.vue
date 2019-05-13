<template lang="pug">
  div
    v-alert(class="mb-0" transition="slide-y-reverse-transition" type="error" :value="error !=''") {{error}}
    v-card
      v-card-title
        v-layout(row wrap justify-center)
          v-flex(xs10 class="text-xs-center")
            h1 Log In
      v-card-text
        v-form()
          v-layout(row wrap justify-center)
            v-flex(xs10 sm8)
              v-text-field(v-model="email" label="Email" required)
            v-flex(xs10 sm8)
              v-text-field(v-model="password" label="Password" required)
      v-card-actions
        v-layout(row wrap)
          v-flex(xs12 class="text-xs-center")
            v-btn(depressed round color="#0a4bb2" dark @click="login()")
              | Log In
              v-icon(right) lock_open
          v-flex(xs12 class="mt-3 text-xs-center")
            p(class="grey--text pointer") Forgot your password?
</template>

<script>
export default {
  data: function() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('auth/loginUsingEmail', {
          email: this.email,
          password: this.password
        })
        .then(user => {
          alert(user)
        })
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>

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
            v-flex(xs10 sm10)
              v-text-field(outline v-model="email" label="Email" type="email")
            v-flex(xs10 sm10)
              v-text-field(outline v-model="password" label="Password" required type="password")
      v-card-actions
        v-layout(row wrap)
          v-flex(xs12 class="text-xs-center")
            v-btn(round color="#0a4bb2" dark @click="login" :loading="loading")
              | Log In
              v-icon(right) lock_open
            v-btn(flat round color="#b637e5" @click="loginGoogle")
              | Sign Up
              v-icon(right) person_add
          v-flex(xs12 class="mt-3 text-xs-center")
            p(class="grey--text pointer") Forgot your password?
</template>

<script>
import googleSignInButton from '@/components/googleSignInButton'

export default {
  components: {
    googleSignInButton
  },
  data: function() {
    return {
      email: '',
      password: '',
      error: '',
      loading: false,
      timeout: null
    }
  },
  methods: {
    login() {
      this.loading = true
      this.$store
        .dispatch('auth/loginUsingEmail', {
          email: this.email,
          password: this.password
        })
        .then(user => {
          this.loading = false
        })
        .catch(error => {
          this.loading = false
          this.raiseError(error)
        })
    },
    loginGoogle() {
      this.loading = true
      this.$store
        .dispatch('auth/signInUsingGoogle')
        .then(user => {
          this.loading = false
        })
        .catch(error => {
          this.loading = false
          this.raiseError(error)
        })
    },
    raiseError(error) {
      this.error = error
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.error = ''
      }, 10000)
    }
  }
}
</script>

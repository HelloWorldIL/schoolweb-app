<template lang="pug">
  div
    v-card
      v-card-title
        v-layout(row wrap justify-center)
          v-flex(xs10 class="text-xs-center")
            h1 Log In
      v-card-text
        v-form(v-model="valid")
          v-layout(row wrap justify-center)
            v-flex(xs10 sm10)
              v-text-field(outline v-model="email" label="Email" type="text" data-vv-name="email" required v-validate="'required|email'" :error-messages="errors.collect('email')")
            v-flex(xs10 sm10)
              v-text-field(outline v-model="password" label="Password" required data-vv-name="password" type="password" v-validate="'required|min:6'" :error-messages="errors.collect('password')")
      v-card-actions
        v-layout(row wrap)
          v-flex(xs12 class="text-xs-center")
            v-btn(round color="#0a4bb2" dark @click="login" :loading="loadingLogin")
              | Log In
              v-icon(right) lock_open
            v-btn(flat round color="#b637e5" to="/signup")
              | Sign Up
              v-icon(right) person_add
          v-flex(xs12 class="mt-3 text-xs-center")
            googleSignInButton(@click.native="loginGoogle" :loading="loadingGoogle")
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
      valid: false,
      email: '',
      password: '',
      loadingLogin: false,
      loadingGoogle: false,
      loadingSignUp: false,
      timeout: null
    }
  },
  methods: {
    login() {
      this.loadingLogin = true
      this.$store
        .dispatch('auth/loginUsingEmail', {
          email: this.email,
          password: this.password
        })
        .then(user => {
          this.loadingLogin = false
        })
        .catch(error => {
          this.loadingLogin = false
          this.raiseError(error)
        })
    },
    loginGoogle() {
      this.loadingGoogle = true
      this.$store
        .dispatch('auth/signInUsingGoogle')
        .then(user => {
          this.loadingGoogle = false
        })
        .catch(error => {
          this.loadingGoogle = false
          this.raiseError(error)
        })
    },
    signUp() {
      this.$emit('signUp')
    },
    raiseError(error) {
      this.$emit('error', error)
    }
  }
}
</script>

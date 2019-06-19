<template lang="pug">
  v-flex(xs12 sm10 md8 lg5 x14)
    v-container(fluid)
      v-layour(column)
        v-flex
            v-alert(class="mb-0" transition="slide-y-reverse-transition" type="error" :value="error !=''") {{error}}
        v-flex
          v-card
            v-card-title
              v-layout(row wrap justify-center)
                v-flex(xs10 class="text-xs-center")
                  h1 Sign Up
            v-card-text
              v-form()
                v-layout(row wrap justify-center)
                  v-flex(xs10 sm10)
                    v-text-field(outline v-model="name" label="Name")
                  v-flex(xs10 sm10)
                    v-text-field(outline v-model="email" label="Email" type="email")
                  v-flex(xs10 sm10)
                    v-text-field(outline v-model="password" label="Password" required type="password")
            v-card-actions
              v-layout(row wrap)
                v-flex(xs12 class="text-xs-center")
                  v-btn(round color="#0a4bb2" dark @click="signUp" :loading="loading")
                    | Sign Up
                    v-icon(right) person_add
                  v-btn(flat round color="#b637e5" to="/login")
                    | Sign in instead
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      name: '',
      error: '',
      loading: false
    }
  },
  methods: {
    signUp() {
      this.loading = true
      this.$store
        .dispatch('auth/signUpUsingEmail', {
          email: this.email,
          password: this.password
        })
        .then(user => {
          this.loading = false
        })
        .catch(error => {
          this.handleError(error)
          this.loading = false
        })
    },
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

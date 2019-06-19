<template lang="pug">
  v-flex(xs12 sm10 md8 lg5 x14)
    v-container(fluid)
      v-layout(column)
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
                    v-text-field(outline v-model="name" label="Name" required data-vv-name="name" v-validate="'required'")
                  v-flex(xs10 sm10)
                    v-text-field(outline v-model="email" label="Email" type="text" data-vv-name="email" required v-validate="'required|email'" :error-messages="errors.collect('email')")
                  v-flex(xs10 sm10)
                    v-text-field(outline v-model="password" label="Password" required data-vv-name="password" type="password" v-validate="'required|min:6'" :error-messages="errors.collect('password')" ref="password")
                  v-flex(xs10 sm10)
                    v-text-field(outline v-model="confirmPassword" label="Confirm Password" required data-vv-name="confirmPassword" data-vv-as="password" type="password" v-validate="'required|confirmed:password'" :error-messages="errors.collect('confirmPassword')")
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
      confirmPassword: '',
      name: '',
      error: '',
      loading: false
    }
  },
  methods: {
    signUp() {
      this.loading = true
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false
          return
        }
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

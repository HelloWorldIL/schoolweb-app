<template lang="pug">
  div
    v-flex(class="text-xs-center white--text")
      h1(class="display-3") HSL
      h2 Herzliya Space Laboratory
    v-flex()
      v-btn(outline round color="white" large) About Us
      v-btn(outline round color="white" large) Login
  </template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>

<template lang="pug">
  div
    v-flex(class="text-xs-center")
      h1(class="display-3 white--text") HSL
      h2(class="white--text") Herzliya Space Laboratory
    v-flex
      v-btn(outline round color="white" large to="/about") About Us
      v-btn(outline round color="white" large to="/login" v-if="!user") Login
  </template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    user: function() {
      return this.$store.getters['auth/currentUser']
    }
  }
}
</script>

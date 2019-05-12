<template lang="pug">
  div
    v-flex(class="text-xs-center")
      h1(class="display-3 white--text") HSL
      h2(class="white--text") Herzliya Space Laboratory
    v-flex
      v-btn(outline round color="white" large to="/about") About Us
      v-btn(outline round color="white" large to="/login") Login
    v-flex
      h1(class="display-2 white--text") Id: {{userId}}
      h1(class="display-2 white--text") isAuthenticated: {{isAuthenticated}}
  </template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    userId: function() {
      return this.$store.state.auth.user == null
        ? ''
        : this.$store.state.auth.user.uid
    },
    isAuthenticated: function() {
      return this.$store.getters['auth/isAuthenticated']
    }
  }
}
</script>

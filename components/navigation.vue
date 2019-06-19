<template lang="pug">
  v-toolbar(app color="transparent" flat dark absolute)
    v-toolbar-side-icon(v-if="$route.path != `/`" to="/")
      v-icon satellite
    v-spacer
    v-toolbar-items
      v-btn(flat v-for="item in items" :key="item.link" :to="item.link") {{ item.title }}
      v-btn(light color="primary" to="/login" v-if="!user") Log In
      v-btn(light @click="logOut" v-if="user") Log Out
</template>

<script>
export default {
  data: function() {
    return {
      items: [{ title: 'About', link: '/about' }]
    }
  },
  computed: {
    user: function() {
      return this.$store.getters['auth/currentUser']
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logOut')
    }
  }
}
</script>

<template lang="pug">
  v-btn(:loading="loading")
    googleIcon(class="mr-1")
    |Sign In with google
</template>

<script>
import googleIcon from '@/components/googleIcon'

export default {
  components: {
    googleIcon
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    signIn(user) {}
  }
}
</script>

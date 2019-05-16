<template lang="pug">
  v-flex(xs12 sm10 md8 lg5 xl4)
    login()

</template>

<script>
import login from '~/components/login.vue'

export default {
  components: {
    login
  },
  data: function() {
    return {}
  }
}
</script>

<template lang="pug">
  v-container(fluid)
    v-layout(row wrap justify-center)
      v-flex(xs10 sm7 md5)
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

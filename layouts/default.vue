<template lang="pug">
  v-app()
    navigation(v-if="isLoaded")
    particles(class="particles")
    v-content(class="text-xs-center")
      v-container(fluid fill-height)
        v-layout(column align-center justify-center)
          transition(name="fade-transition" leave-active-class="animated fadeOut" enter-acitve-class="animated fadeIn")
            nuxt(class="bring-to-top" v-if="isLoaded")
</template>

<script>
import navigation from '~/components/navigation.vue'
import particles from '~/components/particles.vue'
import('@neneos/nuxt-animate.css')

export default {
  components: {
    navigation,
    particles
  },
  data: function() {
    return {
      isLoaded: false
    }
  },
  mounted() {
    this.isLoaded = this.$store.getters['auth/isLoaded']
  }
}
</script>

<style lang="sass">
.bring-to-top
  z-index: 1

h1, h2, h3, h4, h5
  color: #484848

.pointer
  cursor: pointer !important
</style>

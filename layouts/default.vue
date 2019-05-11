<template lang="pug">
  v-app()
    v-content(class="text-xs-center")
      navigation
      v-container(fluid fill-height class="pa-0")
        particles(class="particles hidden-sm-and-down")
        v-container(fluid)
          v-layout(column align-center justify-center)
            nuxt(class="bring-to-top")
</template>

<script>
import navigation from '~/components/navigation.vue'
import particles from '~/components/particles.vue'

export default {
  components: {
    navigation,
    particles
  }
}
</script>

<style lang="sass">
.bring-to-top
  z-index: 1
</style>

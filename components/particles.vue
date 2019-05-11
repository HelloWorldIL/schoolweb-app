<template lang="pug">
  #particles-js
</template>

<script>
if (process.client) {
  require('particles.js')
}

export default {
  mounted() {
    this.initParticles()
  },
  methods: {
    initParticles() {
      window.particlesJS.load('particles-js', '/particles.json', function() {})
    }
  }
}
</script>

<style lang="sass">
#particles-js
  position: fixed
  width: 100%
  height: 100%
  background: #232741

#particles-js > canvas
  width: 100%
  height: 100%
</style>

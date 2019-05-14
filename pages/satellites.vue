<template lang="pug">
  div
    v-container()
      v-btn(color="secondary" large class="pt-50") Add A Satellite
    v-card
      v-container(fluid grid-list-xl)
        v-layout(row wrap)
          v-flex(v-for="satellite in satellites" :key="satellite.id")
            satellite(:name="satellite.name" :id="satellite.id" imageUrl="satellite.imageURL" v-if="satellites")
</template>

<script>
import satellite from '@/components/satellite'

export default {
  components: {
    satellite
  },
  data() {
    return {}
  },
  computed: {
    satellites: function() {
      return this.$store.state.satellites.satellites
    }
  },
  mounted() {
    this.$store.dispatch('satellites/loadSatellites')
  }
}
</script>

<style lang="sass" scoped>
.scroll
  overflow-y: auto
</style>

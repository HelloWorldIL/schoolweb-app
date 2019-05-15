<template lang="pug">
  div
    v-container()
    v-card
      v-container(fluid grid-list-xl)
        v-btn(color="secondary" large class="pt-50" @click="addSat()") Add A Satellite
        addSat(v-model="showDialog")
        v-layout(row wrap)
          v-flex(v-for="satellite in satellites" :key="satellite.id")
            satellite(:name="satellite.name" :id="satellite.id" imageUrl="satellite.imageURL" v-if="satellites")
</template>

<script>
import satellite from '@/components/satellite'
import addSat from '@/components/addSat'

export default {
  components: {
    satellite,
    addSat
  },
  data() {
    return {
      showDialog: false
    }
  },
  computed: {
    satellites: function() {
      return this.$store.state.satellites.satellites
    }
  },
  mounted() {
    this.$store.dispatch('satellites/loadSatellites')
  },
  methods: {
    addSat() {
      this.showDialog = true
    }
  }
}
</script>

<style lang="sass" scoped>
.scroll
  overflow-y: auto
</style>

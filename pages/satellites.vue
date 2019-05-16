<template lang="pug">
  div
    v-container()
      v-card
        v-container(fluid grid-list-xl)
          v-layout(row wrap)
            v-flex(v-if="satellites.length == 0 && satLoaded")
              h3(v-if="!isAuthenticated") There are no satellites in the database.
              h3(v-if="isAuthenticated") There are no satellites in the database, feel free to add one.
            v-flex(v-if="!satLoaded")
              p Loading Satellites
              v-progress-circular(indeterminate color="primary")
            v-flex(v-for="satellite in satellites" :key="satellite.id")
              satellite(:name="satellite.name" :id="satellite.id" :imageUrl="satellite.imageUrl")
    v-btn(fab color="secondary" fixed bottom right @click="addSat" v-if="isAuthenticated")
      v-icon() add
    addSat(v-model="showDialog")
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
      showDialog: false,
      satLoaded: false,
      satellites: []
    }
  },
  computed: {
    isAuthenticated: function() {
      return this.$store.getters['auth/isAuthenticated']
    }
  },
  mounted() {
    this.$store.dispatch('satellites/loadSatellites').then(satellites => {
      this.satellites = satellites
      this.satLoaded = true
    })
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

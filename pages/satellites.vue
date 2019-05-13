<template lang="pug">
  v-card(width="80%")
    v-container(fluid grid-list-xl)
      v-layout(row wrap)
        v-flex(v-for="satellite in satellites" :key="id")
          satellite(:name="satellite.name" :id="satellite.id" :imageUrl="satellite.imageURL")
</template>

<script>
import satellite from '@/components/satellite'

export default {
  components: {
    satellite
  },
  data() {
    return {
      satellites: [
        {
          name: 'Hoopoe',
          id: '44215',
          imageURL:
            'http://voice.gardenbird.co.uk/wp-content/uploads/2018/01/Fotolia_160919141_Subscription_L-1200x800.jpg'
        },
        {
          name: 'Hoopoe',
          id: '44215',
          imageURL:
            'http://voice.gardenbird.co.uk/wp-content/uploads/2018/01/Fotolia_160919141_Subscription_L-1200x800.jpg'
        },
        {
          name: 'Hoopoe',
          id: '44215',
          imageURL:
            'http://voice.gardenbird.co.uk/wp-content/uploads/2018/01/Fotolia_160919141_Subscription_L-1200x800.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.scroll
  overflow-y: auto
</style>

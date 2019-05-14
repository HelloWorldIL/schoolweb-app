<template lang="pug">
  v-card
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
          name: 'Dove',
          id: '44215',
          imageURL:
            'https://www.birdlife.org/sites/default/files/styles/1600/public/news/european_turtle_dove_streptopelia_turtur_websitec_revital_salomon.jpg?itok=FaPEfAzi'
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

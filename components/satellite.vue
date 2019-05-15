<template lang="pug">
  v-card(height="100%")
    v-img(:src="`https://www.birdlife.org/sites/default/files/styles/1600/public/news/european_turtle_dove_streptopelia_turtur_websitec_revital_salomon.jpg?itok=FaPEfAzi`" height="60%")
    v-card-text
      v-container(fill-height fluid pa-0)
        v-layout(column align-center justify-center)
          v-flex(class="text-xs-center")
            <span class="headline" v-text="name"></span>
      span ID: {{id}}
      v-card-actions
        v-spacer
        v-btn(color="red" flat @click="remove()") Remove
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      default: ''
    }
  },
  methods: {
    remove() {
      this.$store.commit('satellites/removeSatellite', this.id)
    }
  }
}
</script>

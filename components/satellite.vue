<template lang="pug">
  v-card(height="100%")
    v-img(:src="imageUrl" height="60%")
    v-card-text
      v-container(fill-height fluid pa-0)
        v-layout(column align-center justify-center)
          v-flex(class="text-xs-center")
            <span class="headline" v-text="name"></span>
      span ID: {{id}}
      v-card-actions
        v-spacer
        v-btn(color="red" flat @click="remove()" v-if="isAuthenticated") Remove
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
  computed: {
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated']
    }
  },
  methods: {
    remove() {
      this.$store.dispatch('satellites/deleteSatellite', this.id)
    }
  }
}
</script>

<template lang="pug">
  v-dialog(v-model="show" max-width="600px")
    v-card
      v-card-title
        span(class="headline") Add A Satellite
      v-card-text
        v-container(grid-list-md)
          v-layout(wrap)
            v-flex(xs12)
              v-text-field(v-model="name" label="Name" hint="Example: Hoopoe")
              v-text-field(v-model="id" label="ID" hint="Example: 41451")
            v-flex(xs12)
              v-btn(dark) Upload An Image
      v-card-actions
        v-spacer
        v-btn(color="blue darken-1" flat @click="show = false") Close
        v-btn(color="blue darken-1" flat @click="add()") Save
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: '',
      id: ''
    }
  },
  computed: {
    show: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    add: function() {
      this.$store.dispatch('satellites/addSatellite', {
        id: this.id,
        name: this.name
      })
      this.show = false
    }
  }
}
</script>

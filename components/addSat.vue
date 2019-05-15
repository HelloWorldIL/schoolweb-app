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
              upload-btn(title="Upload An Image" @file-update="fileUpdate")
              v-img(:src="imageUrl")
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
      id: '',
      imageUrl: '',
      image: null
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
        name: this.name,
        image: this.image
      })
      this.show = false
    },
    fileUpdate: function(file) {
      const fr = new FileReader()
      fr.addEventListener('load', () => {
        this.imageUrl = fr.result
      })
      fr.readAsDataURL(file)
      this.image = file
    }
  }
}
</script>

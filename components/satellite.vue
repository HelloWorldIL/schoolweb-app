<template lang="pug">
  v-card(height="100%")
    v-img(:src="imageUrl" height="60%")
    v-card-title
      v-container(fill-height fluid pa-0)
        v-layout(column align-center justify-center)
          v-flex(class="text-xs-center")
            <span class="headline" v-text="name"></span>
      h1 ID: {{id}}
</template>

<script>
export default {
  props: {
    name: String,
    id: String,
    imageUrl: String
  }
}
</script>

<template lang="pug">
  v-card(width="500px")
    v-img(:src="`http://voice.gardenbird.co.uk/wp-content/uploads/2018/01/Fotolia_160919141_Subscription_L-1200x800.jpg`" cover)
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

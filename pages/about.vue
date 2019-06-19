<template lang="pug">
  v-card
    v-card-title(primary-title)
      div
        .headline HSL
        span {{about_text}}
    v-img(:src="require('@/assets/sat.jpg')")
</template>

<script>
export default {
  data() {
    return {
      about_text: 'This website allows you to manage a database of satellites.'
    }
  }
}
</script>

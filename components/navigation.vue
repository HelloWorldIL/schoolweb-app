<template lang="pug">
  v-toolbar(color="transparent" flat dark absolute)
    v-toolbar-side-icon(v-if="$route.path != `/`" to="/")
      v-icon satellite
    v-spacer
    v-toolbar-items
      v-btn(flat v-for="item in items" :key="item.link" :to="item.link") {{ item.title }}
</template>

<script>
export default {
  data: function() {
    return {
      items: [{ title: 'About', link: '/about' }]
    }
  }
}
</script>

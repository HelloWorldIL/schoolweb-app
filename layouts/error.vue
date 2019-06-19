<template lang="pug">
  v-card
    v-img(:src="require('@/assets/blackHole.png')" height="600px" width="500px")
      v-container(fluid fill-height pt-5)
        v-layout(column)
          v-flex(xs12 class="text-xs-center")
            span(class="headline white--text") 404 PAGE NOT FOUND
          v-flex(xs2 class="text-xs-bottom")
            span(class="white--text") Be carefull not to fall down the event horizon!
</template>

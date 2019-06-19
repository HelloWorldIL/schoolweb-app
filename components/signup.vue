<template lang="pug">
  div
    v-card
      v-card-title
        v-layout(row wrap justify-center)
          v-flex(xs10 class="text-xs-center")
            h1 Sign Up
      v-card-text
        v-form()
          v-layout(row wrap justify-center)
            v-flex(xs10 sm10)
              v-text-field(outline v-model="email" label="Email" type="email")
            v-flex(xs10 sm10)
              v-text-field(outline v-model="password" label="Password" required type="password")
      v-card-actions
        v-layout(row wrap)
          v-flex(xs12 class="text-xs-center")
            v-btn(round color="#0a4bb2" dark @click="login" :loading="loadingLogin")
              | Sign Up
              v-icon(right) person_add
</template>

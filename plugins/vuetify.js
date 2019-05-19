import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'
import colors from 'vuetify/es5/util/colors'

import GoogleIcon from '@/components/googleIcon.vue'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken2,
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  },
  icons: {
    // eslint-disable-next-line prettier/prettier
    'google': {
      component: GoogleIcon
    }
  },
  directives: {
    Ripple
  }
})

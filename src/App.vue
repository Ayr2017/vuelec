<template>
  <v-app>
   <header-component></header-component>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Localbase from 'localbase'
import HeaderComponent from '@/components/app/HeaderComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data: () => ({
    //
  }),
  mounted(){
    let db = new Localbase(process.env.VUE_APP_DB_NAME)
  }
};
</script>

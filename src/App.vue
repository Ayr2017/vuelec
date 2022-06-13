<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Localbase from 'localbase'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  mounted(){
    let db = new Localbase(process.env.VUE_APP_DB_NAME)
  }
};
</script>

<template>
  <v-container fluid>

    <v-row >
      <v-col class="d-flex justify-center mb-6" fluid>
        <login-dialog v-if="dialogIsOpened"></login-dialog>
        <card-component v-else></card-component>
        
      </v-col>
    </v-row>
    

  </v-container>
</template>

<script>
import LoginDialog from '@/components/start/LoginDialog.vue'
import CardComponent from '@/components/start/CardComponent.vue'
import {mapGetters} from 'vuex'

  export default {
    name: 'StartView',

    components: {
      LoginDialog,
      CardComponent,
    },

    mounted() {
      this.axios
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => console.log(response));
      },

    computed :{
      testString(){
        return this.$store.getters.test;
      },
      ...mapGetters(['dialogIsOpened']),
      // dialogIsOpened() {
      //   return this.$store.getters.dialogIsOpened;
      // }
    }
  }
</script>

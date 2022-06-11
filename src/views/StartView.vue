<template>
  <v-container>

    <v-row>
      <v-col class="d-flex justify-center mb-6" fluid>
        
        <card-component></card-component>
        
      </v-col>
    </v-row>
    <login-dialog v-if="dialogIsOpened"></login-dialog>

  </v-container>
</template>

<script>
import LoginDialog from '@/components/start/LoginDialog.vue'
import CardComponent from '@/components/start/CardComponent.vue'

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
      dialogIsOpened() {
        return this.$store.getters.dialogIsOpened;
      }
    }
  }
</script>

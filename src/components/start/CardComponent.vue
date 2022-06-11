<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="@/assets/img/ping-pong.jpg"
    ></v-img>

    <v-card-title class="justify-center">
        <span class="text-center">Little Tennis is ping-pong</span> <br>
    </v-card-title>

    

    <v-divider class="mx-4"></v-divider>

    
    <v-card-actions class="justify-center">
        
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
      Start The Game
      </v-btn>
      
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    mounted(){
      console.log(process.env)
    },

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => {
            this.loading = false;
            this.$router.push('/about')
            }, 500)
      },
    },
  }
</script>
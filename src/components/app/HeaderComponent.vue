<template>
  <div >
    <v-app-bar
      color="grey darken-4"
      dense
      dark
      style="-webkit-app-region: drag"
      height="30"
    >
    <v-btn class="close-btn" icon x-small @mouseover="over" @click="close" style="-webkit-app-region: no-drag;" >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      
      <v-toolbar-title class="text-subtitle-1">Page title</v-toolbar-title>
      

      <v-spacer></v-spacer>

    </v-app-bar>
  </div>
</template>


<script>
export default {
    data: () => ({
        bgColor : 'none'
    }),
    methods :{
        close(){
            window.close()
        },
        over(){
            this.bgColor = 'red';
        }
    },
}
</script>

<style>
.close-btn:hover{
    background-color: rgba(255, 0, 0, 0.493);
}


</style>
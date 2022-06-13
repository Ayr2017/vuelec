<template>
  <v-container fluid>

    <v-row >
      <v-col class="d-flex justify-center mb-6" fluid>
        <v-btn color="purple darken-4" class="white--text" @click="openIDB">ADD USER</v-btn>
        <v-btn color="purple lighten-4" class="black--text" @click="createIDBTable">SHOW USERS</v-btn>
       
      </v-col>
    </v-row>
    <v-row>
      <v-col>
         <ul>           
          <li v-for="user in users" :key="user.age">{{user.age}}</li>
        </ul>
      </v-col>
    </v-row>
    

  </v-container>
</template>

<script>
import Localbase from 'localbase'
import conf from '@/api/indexeddb'
export default {
  data: () => ({
    users: []
  }),
  mounted(){
   
  },
  methods: {
     openIDB(){
       let db = new Localbase(conf.dbName)

       db.collection('users').add({
        id: 1,
        name: 'Bill',
        age: Math.floor(Math.random() * 100),
      })
    },
     createIDBTable(){
       let db = new Localbase(process.env.VUE_APP_DB_NAME)
       db.collection('users').get().then(users => {
        this.users = users;
      })
    }
  }
}
</script>


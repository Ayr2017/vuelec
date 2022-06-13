<template>

      <v-card>
        <v-card-title>
          <span class="text-h5">Вход в систему</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  required
                  v-model="person.email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Пароль"
                  type="password"
                  required
                  v-model="person.password"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Закрыть
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="openDialog"
          >
            Войти
          </v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
  export default {
    data: () => ({
      dialog: true,
      person: {
          email: '',
          password: ''
      }
    }),
    methods:{
        openDialog(){
            this.$store.dispatch('openDialog', this.person);
        }
    }
  }
</script>

<style>

</style>
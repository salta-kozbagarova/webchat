<template>
  <v-layout row>
    <v-flex xs12 md12 lg12>
      <v-card>
        <v-img
          :src="authUser.avatar"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0" v-html="authUser.username"></h3>
            <div v-html="authUser.status"></div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn flat color="orange" dark v-on="on">Add new contact</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Add new contact</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm12 md12>
                      <v-text-field label="Username" v-model="form.username" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12 md12>
                      <v-text-field label="Phone number" v-model="form.phoneNumber" hint=""></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="dialog = false">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="addNewContact">Add</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { RepositoryFactory } from './../repositories/RepositoryFactory.js'
const AuthUserRepository = RepositoryFactory.get('authUser');
const ContactsRepository = RepositoryFactory.get('contacts');

  export default {
    data () {
      return {
        authUser: null,
        dialog: false,
        form: {
          username: null,
          phoneNumber: null
        }
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.authUser = AuthUserRepository.get();
      },
      addNewContact(){
        ContactsRepository.addContact(this.form);
        this.dialog = false;
        this.$emit('contact-added');
      }
    },
    watch: {
      '$route': 'fetchData'
    }
  }
</script>

<style>

</style>

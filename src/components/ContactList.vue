<template>
  <v-layout row>
    <v-flex xs12 md12 lg12>
      <v-card>
        <v-text-field
          solo
          label="Search"
          append-icon="search"
          @keyup="searchContacts"
        ></v-text-field>
        <v-list two-line>
          <template v-for="(item, index) in contacts">
            <v-divider
              v-if="index % 2 != 0 && (index+1) < contacts.length"
              inset
            ></v-divider>

            <v-list-tile
              avatar
              v-on:click="goToChat(item)"
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.username"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.status"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { RepositoryFactory } from './../repositories/RepositoryFactory.js'
const ContactsRepository = RepositoryFactory.get('contacts');

  export default {
    props: {
      isContactAdded: Boolean
    },
    data () {
      return {
        contacts: []
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      openChat: function(event){
        console.log('contact was clicked');
      },
      goToChat(item){
        this.$router.push({ name: 'chat-container', params: { id: item.id } })
      },
      fetchData () {
        this.contacts = ContactsRepository.get();
      },
      searchContacts(event){
        var searchWord = event.target.value;
        this.contacts = ContactsRepository.findContact({'username': searchWord});
      }
    },
    watch: {
      '$route': 'fetchData',
      isContactAdded: function (newQuestion, oldQuestion) {
        this.fetchData();
      }
    }
  }
</script>

<style>

</style>

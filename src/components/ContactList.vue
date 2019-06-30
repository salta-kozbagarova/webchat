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
              v-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-tile
              v-else
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
    data () {
      return {
        contacts: [],
        loading: false
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
        this.loading = true;
        this.contacts = ContactsRepository.get();
        this.loading = false;
      },
      searchContacts(event){
        var searchWord = event.target.value;
        this.contacts = ContactsRepository.findContact({'username': searchWord});
      }
    },
    watch: {
      '$route': 'fetchData'
    }
  }
</script>

<style>

</style>

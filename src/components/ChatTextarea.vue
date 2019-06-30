<template>
  <v-layout row wrap align-end>
    <v-flex d-flex xs8 md8 lg8 offset-md2>
      <v-textarea
        v-model="message"
        :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
        :prepend-icon="prependedIcon"
        solo
        rows="1"
        clear-icon="mdi-close-circle"
        clearable
        :placeholder="placeholder"
        @click:append-outer="sendMessage"
        @click:clear="clearMessage"
        @keyup.shift.13.exact="goToNewLine"
        @keyup.13.exact="sendMessage"
        auto-grow
      ></v-textarea>
    </v-flex>
  </v-layout>
</template>

<script>
import { RepositoryFactory } from './../repositories/RepositoryFactory.js'
const ContactsRepository = RepositoryFactory.get('contacts');

  export default {
    props: {
      contact: Object
    },
    data: () => ({
      password: 'Password',
      show: false,
      message: '',
      iconIndex: 0,
      placeholder: 'Write a message',
      prependedIcon: "mdi-paperclip"
    }),

    computed: {
    },

    methods: {
      toggleMarker () {
        this.marker = !this.marker
      },
      sendMessage () {
        if(!this.message || this.message.length == 0)
          return false;
        this.contact.chats = this.contact.chats || [];
        var newId = this.contact.chats.length + 1;
        this.contact.chats.push(
          {
            "id": newId,
            message: this.message,
            "date_sent": new Date(),
            "username": "Saltanat Alikhanova"
          }
        );
        ContactsRepository.updateContact(this.contact.id, this.contact);
        this.$emit('chats-changed', this.contact.chats);
        this.clearMessage()
      },
      clearMessage () {
        this.message = ''
      },
      goToNewLine (e) {
        this.message = this.message + '\n';
      }
    }
  }
</script>

<style>

</style>

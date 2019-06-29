<template>
  <v-app>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex d-flex xs3 md3 lg3>
            <v-layout row wrap>
              <v-flex d-flex>
                  <ProfileInfo/>
              </v-flex>
              <v-flex d-flex>
                  <ContactList v-on:contact-selected="contact=$event"/>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs9 md9 lg9> 
            <ChatContainer v-bind:contact="contact"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ContactList from './components/ContactList'
import ProfileInfo from './components/ProfileInfo'
import ChatContainer from './components/ChatContainer'

export default {
  name: 'App',
  props: [
  ],
  components: {
    ContactList,
    ProfileInfo,
    ChatContainer
  },
  data () {
    return {
      contact: {}
    }
  }
}
</script>

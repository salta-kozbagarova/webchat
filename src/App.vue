<template>
  <v-app>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap :style="styles.layout">
          <v-flex d-flex xs3 md3 lg3 overflow-y-auto overflow-x-hidden :style="styles.cells">
            <v-layout row wrap>
              <v-flex xs12 md12 lg12>
                  <ProfileInfo v-on:contact-added="onContactAdded"/>
              </v-flex>
              <v-flex xs12 md12 lg12 style="height: -webkit-fill-available;">
                  <ContactList v-bind:isContactAdded="gotNewContact"/>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs9 md9 lg9 :style="styles.cells"> 
            <ChatContainer/>
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
      styles: {
        layout:{
          height: "600px"
        },
        cells:{
          height: "100%"
        }
      },
      gotNewContact: false
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    onContactAdded(){
      this.gotNewContact = true;
    }
  }
}
</script>

<template>
  <v-layout row wrap>
    <v-flex d-flex xs12 md12 lg12>
      <v-sheet
        class="d-flex"
        height=""
        elevation="3"
      >
  <v-layout column fill-height justify-space-between>
      <template v-if="hasActiveContact">
        <template v-if="contactHasChats">

    <v-flex xs12 md12 lg12>
    <template v-for="(chats, day) in groupedChats">
    <p v-html="chatDay(day)" class="text-xs-center mt-10"></p>
          <MessageBox v-for="chat in groupedChats[day]" v-bind:chat="chat" v:key="chat.id"/>
    </template>
    </v-flex>
        </template>
    <v-flex>
        <ChatTextarea/>
    </v-flex>
      </template>
          <p class="text-xs-center" style="margin: auto;color: grey;font-size: 18px;" v-else>{{ label }}</p>
  </v-layout>
      </v-sheet>
    </v-flex>
  </v-layout>
</template>

<script>
import ChatTextarea from './ChatTextarea'
import MessageBox from './MessageBox'

  export default {
    components: {
      ChatTextarea,
      MessageBox
    },
    props: {
      contact: Object
    },
    data () {
      return {
        a: '<v-layout row wrap><v-flex d-flex xs12 md12 lg12 elevation-3></v-flex><v-flex d-flex xs12 md12 lg12><ChatTextarea/></v-flex></v-layout>',
        label: 'Please select a chat to start messaging',
        chatsByDay: {}
      }
    },
    methods: {
      groupByDay(chat, index, array){
        var d = new Date(chat.date_sent);
        d = Math.floor(d.getTime()/(1000*60*60*24));
        if(!this.chatsByDay){
          this.chatsByDay = {};
        }
        this.chatsByDay[d] = this.chatsByDay[d] || [];
        this.chatsByDay[d].push(chat);
      },
      chatDay(day){
        var d = new Date(day*(1000*60*60*24));
        var month = d.getMonth();
        month = month > 9 ? month : '0' + month;
        var day = d.getDate();
        day = day > 9 ? day : '0' + day;
        return d.getFullYear() + '.' + month + '.' + day;
      }
    },
    computed: {
      hasActiveContact: function(){
        return !(Object.entries(this.contact).length === 0 && this.contact.constructor === Object);
      },
      contactHasChats: function(){
        return this.contact['chats'] && this.contact['chats'].length > 0;
      },
      groupedChats: function(){
        this.contact.chats.map(this.groupByDay);
        return this.chatsByDay;
      }
    }
  }
</script>

<style>

</style>

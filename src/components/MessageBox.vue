<template>
  <v-layout column style="font-size:12px;">
  <v-layout row>
    <v-flex d-flex xs8 md8 lg8 offset-md2>
      <span class="text-xs-left blue--text text--lighten-2" style="font-weight: bold;">{{ chat.username }}</span>
    </v-flex>
  </v-layout>
  <v-layout row>
    <v-flex d-flex xs8 md8 lg8 offset-md2 style="font-size:13px;">
      <span class="text-xs-left">{{ chat.message }}</span>
      <span class="text-xs-right">{{ chatTime }}</span>
    </v-flex>
  </v-layout>
  </v-layout>
</template>

<script>
  export default {
    props: {
      chat: Object
    },
    data: () => ({
    }),

    computed: {
      chatTime: function(){
        return this.chat.date_sent.getHours() + ':' + this.chat.date_sent.getMinutes() + ':' + this.chat.date_sent.getSeconds();
      }
    },

    methods: {
    }
  }
</script>

<style>

</style>

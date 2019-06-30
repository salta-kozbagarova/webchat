<template>
  <v-layout column style="font-size:12px;">
  <v-layout row>
    <v-flex d-flex xs12 md12 lg12>
      <span class="text-xs-left blue--text text--lighten-2 font-weight-bold">{{ chat.username }}</span>
    </v-flex>
  </v-layout>
  <v-layout row>
    <v-flex d-flex xs12 md12 lg12 style="font-size:13px;">
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
        var hour = new Date(this.chat.date_sent).getHours();
        hour = hour <= 9 ? '0' + hour : hour;
        var min = new Date(this.chat.date_sent).getMinutes();
        min = min <= 9 ? '0' + min : min;
        var sec = new Date(this.chat.date_sent).getSeconds();
        sec = sec <= 9 ? '0' + sec : sec;
        return hour + ':' + min + ':' + sec;
      }
    },

    methods: {
    }
  }
</script>

<style>

</style>

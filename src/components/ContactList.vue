<template>
  <v-layout row>
    <v-flex xs12 md12 lg12>
      <v-card>
        <v-list two-line>
          <template v-for="(item, index) in contacts">
            <v-divider
              v-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.username"
              avatar
              v-on:click="$emit('contact-selected', item)"
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
  export default {
    data () {
      return {
        contacts: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            username: 'Tony Stark',
            status: "Where's my Jarvis?",
            chats: [
              {
                "id": 1,
                message: "dvdfvdfdfdfdf",
                "date_sent": new Date("2019-06-21 14:59"),
                "username": "Tony Stark"
              },
              {
                "id": 2,
                message: "dvdfvdfdfdfdf",
                "date_sent": new Date("2019-06-21 15:15"),
                "username": "Saltanat Alikhanova"
              },
              {
                "id": 3,
                message: "dvdfvdfdfdfdf",
                "date_sent": new Date("2019-06-23 15:15"),
                "username": "Tony Stark"
              },
              {
                "id": 4,
                message: "dvdfvdfdfdfdf",
                "date_sent": new Date("2019-06-24 15:20"),
                "username": "Saltanat Alikhanova"
              },
              {
                "id": 5,
                message: "dvdfvdfdfdfdf",
                "date_sent": new Date("2019-06-21 16:00"),
                "username": "Tony Stark"
              },
              {
                "id": 6,
                message: "dvdfvdfdfdfdf",
                "date_sent": new Date("2019-06-25 16:01"),
                "username": "Saltanat Alikhanova"
              }
            ]
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            username: 'Bruce Wayne',
            status: "Gotham needs you"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            username: 'Carol Danvers',
            status: "On vacation"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            username: 'Diana Prince',
            status: "Women runs the world!"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            username: 'Xena',
            status: "I'm a warrior princess"
          }
        ]
      }
    },
    methods: {
      openChat: function(event){
        console.log('contact was clicked');
      }
    }
  }
</script>

<style>

</style>

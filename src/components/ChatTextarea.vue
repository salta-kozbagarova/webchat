<template>
  <v-layout row wrap align-end>
    <v-flex d-flex xs12 md12 lg12>
        <v-textarea
          v-model="message"
          :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
          :prepend-icon="icon"
          box
          rows="1"
          clear-icon="mdi-close-circle"
          clearable
          :placeholder="placeholder"
          @click:append-outer="sendMessage"
          @click:clear="clearMessage"
          auto-grow
    ></v-textarea>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      password: 'Password',
      show: false,
      message: 'Hey!',
      iconIndex: 0,
      placeholder: 'Write a message',
      icons: [
        'mdi-emoticon',
        'mdi-emoticon-cool',
        'mdi-emoticon-dead',
        'mdi-emoticon-excited',
        'mdi-emoticon-happy',
        'mdi-emoticon-neutral',
        'mdi-emoticon-sad',
        'mdi-emoticon-tongue'
      ]
    }),

    computed: {
      icon () {
        return this.icons[this.iconIndex]
      }
    },

    methods: {
      toggleMarker () {
        this.marker = !this.marker
      },
      sendMessage () {
        this.resetIcon()
        this.clearMessage()
      },
      clearMessage () {
        this.message = ''
      },
      resetIcon () {
        this.iconIndex = 0
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      }
    }
  }
</script>

<style>

</style>

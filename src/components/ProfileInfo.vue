<template>
  <v-layout row>
    <v-flex xs12 md12 lg12>
      <v-card>
        <v-img
          :src="avatar"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0" v-html="username"></h3>
            <div v-html="status"></div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Добавить контакт</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        avatar: 'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        username: 'Saltanat Alikhanova',
        status: "Got a job at BI Development"
      }
    }
  }
</script>

<style>

</style>

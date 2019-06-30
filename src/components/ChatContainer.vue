<template>
  <v-layout row wrap>
    <v-flex d-flex xs12 md12 lg12>
      <v-sheet
        class="d-flex"
        height=""
        elevation="3"
      >
		  <v-layout column fill-height justify-space-between :style="containerHeight">
		  	<template v-if="hasActiveContact">
				<template v-if="contactHasChats">
					<v-flex xs12 md12 lg12 style="overflow:auto;height: -webkit-fill-available;">
						<v-sheet class="mt-5 mb-2 px-5 overflow-y-auto" style="width:80%;margin:auto;">
				    		<template v-for="(chats, day) in groupedChats">
								<p v-html="chatDay(day)" class="text-xs-center"></p>
								<MessageBox v-for="chat in groupedChats[day]" v-bind:chat="chat" v:key="chat.id"/>
				    		</template>
						</v-sheet>
		    		</v-flex>
		        </template>
		        <template v-else>
		        	<v-flex xs12 md12 lg12>
			        	<v-layout align-center fill-height justify-center>
				    		<p class="text-xs-center grey--text" style="margin: auto;font-size: 18px;" @click="testit">{{ noMessageText }}</p>
			        	</v-layout>
		    		</v-flex>
		        </template>
			    <v-flex>
			        <ChatTextarea
			        	v-bind:contact="contact"
			        />
			    </v-flex>
			</template>
			<p class="text-xs-center grey--text" style="margin: auto;font-size: 18px;" v-else>{{ label }}</p>
		  </v-layout>
      </v-sheet>
    </v-flex>
  </v-layout>
</template>

<script>
import ChatTextarea from './ChatTextarea'
import MessageBox from './MessageBox'
import { RepositoryFactory } from './../repositories/RepositoryFactory'

  export default {
    components: {
      ChatTextarea,
      MessageBox
    },
    props: {
    },
    data () {
      return {
        label: 'Please select a chat to start messaging',
        noMessageText: 'No messages yet, start conversation',
        chatsByDay: {},
        isLoading: false,
        //contactHasChats: false
        contact: null
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
      },
      testit(){
      	this.contact['chats'] = [{
                "id": 8,
                message: "dvdfvdfdfdfdf",
                "date_sent": new Date("2019-06-26 16:00"),
                "username": "Tony Stark"
              },
              {
                "id": 9,
                message: "dvdfvdfdfdfdf",
                "date_sent": new Date("2019-06-26 16:01"),
                "username": "Saltanat Alikhanova"
              }];
      },
		fetchData () {
        	var contactsRepository = RepositoryFactory.get('contacts');
			this.isLoading = true;
			this.contact = contactsRepository.getContact(this.$route.params.id);
			this.isLoading = false;
		}
    },
	created () {
		this.fetchData()
	},
    computed: {
      hasActiveContact: function(){
        return !(Object.entries(this.contact).length === 0 && this.contact.constructor === Object);
      },
      contactHasChats: function(){
        return this.contact['chats'] && this.contact['chats'].length > 0;
      },
      groupedChats: function(){
      	this.chatsByDay = {};
        this.contact.chats.map(this.groupByDay);
        return this.chatsByDay;
      },
      containerHeight: function(){
      	if(this.contactHasChats){
      		return 'height: -webkit-fill-available;';
      	} else{
      		return '';
      	}
      }
    },
    watch: {
		'$route': 'fetchData'
	}
  }
</script>

<style>

</style>

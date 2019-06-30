import Repository from './Repository';

const resource = '/contacts';

var contacts = [
  {
    id: 1,
    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    username: 'Tony Stark',
    status: "Where's my Jarvis?",
    chats: [
      {
        "id": 1,
        message: "theres an infinite number of realities Morty, and in a few dozens of those i got lucky and turned everything back to normal",
        "date_sent": new Date("2019-06-21 14:59"),
        "username": "Tony Stark"
      },
      {
        "id": 2,
        message: "Ooh, your little flappy doodles are twitching",
        "date_sent": new Date("2019-06-21 15:15"),
        "username": "Saltanat Alikhanova"
      },
      {
        "id": 3,
        message: "There's pros and cons to every alternate timeline",
        "date_sent": new Date("2019-06-23 15:15"),
        "username": "Tony Stark"
      },
      {
        "id": 4,
        message: "All I wanted was for you to hand me a screwdriver!",
        "date_sent": new Date("2019-06-24 15:20"),
        "username": "Saltanat Alikhanova"
      },
      {
        "id": 5,
        message: "I'm sorry, Morty. It's a bummer.",
        "date_sent": new Date("2019-06-21 16:00"),
        "username": "Tony Stark"
      },
      {
        "id": 6,
        message: "Existence is pain to a meeseeks Jerry",
        "date_sent": new Date("2019-06-25 16:01"),
        "username": "Saltanat Alikhanova"
      },
      {
        "id": 7,
        message: "It's a dream, Morty!",
        "date_sent": new Date("2019-06-26 15:20"),
        "username": "Saltanat Alikhanova"
      },
      {
        "id": 8,
        message: "We're in your dog's dream",
        "date_sent": new Date("2019-06-26 16:00"),
        "username": "Tony Stark"
      },
      {
        "id": 9,
        message: "It's fine, everythings is fine",
        "date_sent": new Date("2019-06-29 16:01"),
        "username": "Saltanat Alikhanova"
      }
    ]
  },
  {
    id: 2,
    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    username: 'Bruce Wayne',
    status: "Gotham needs you"
  },
  {
    id: 3,
    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    username: 'Carol Danvers',
    status: "On vacation"
  },
  {
    id: 4,
    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    username: 'Diana Prince',
    status: "Women runs the world!"
  },
  {
    id: 5,
    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    username: 'Xena',
    status: "I'm a warrior princess"
  }
];

localStorage.setItem('contacts', JSON.stringify(contacts));

var localStorageArrayPush = function(arrayName, item){
  var data = JSON.parse(localStorage.getItem(arrayName));
  data.push(item);
  localStorage.setItem(arrayName, JSON.stringify(data));
};

var localStorageArrayUnshift = function(arrayName, item){
  var data = JSON.parse(localStorage.getItem(arrayName));
  data.unshift(item);
  localStorage.setItem(arrayName, JSON.stringify(data));
};

export default {

	get(){
		//return Repository.get(`${resource}`);
        return JSON.parse(localStorage.getItem('contacts'));
	},

	getContact(contactId){
		//return Repository.get(`${resource}/${contactId}`);
		var contact = null;
    var _contacts = JSON.parse(localStorage.getItem('contacts'));
		for(var i in _contacts){
			contact = _contacts[i];
			if(contact.id == contactId){
				return contact;
			}
		}
		return null;
	},

  addContact(contact){
    contact['id'] = JSON.parse(localStorage.getItem('contacts')).length + 10;
    contact['avatar'] = 'https://cdn.vuetifyjs.com/images/lists/5.jpg';
    contact['status'] = "I'm a new user";
    localStorageArrayUnshift('contacts', contact);
  },

  findContact(filter){
    var _contact = null;
    var success = true;
    var _contacts = JSON.parse(localStorage.getItem('contacts'));
    var res = [];
    for(var i in _contacts){
      _contact = _contacts[i];
      success = true;
      for(var j in filter){
        if(_contact[j] && !_contact[j].toLowerCase().startsWith(filter[j].toLowerCase())){
          success = false;
        }
      }
      if(success){
        res.push(_contact);
      }
    }
    return res;
  },

  updateContact(contactId, contact){
    var index = null;
    var _contact = null;
    var _contacts = JSON.parse(localStorage.getItem('contacts'));
    for(var i in _contacts){
      _contact = _contacts[i];
      if(_contact.id == contactId){
        index = i;
        break;
      }
    }
    _contacts[index] = contact;
    localStorage.setItem('contacts', JSON.stringify(_contacts));
  }
}
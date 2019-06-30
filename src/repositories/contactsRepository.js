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
      },
      {
        "id": 7,
        message: "dvdfvdfdfdfdf",
        "date_sent": new Date("2019-06-26 15:20"),
        "username": "Saltanat Alikhanova"
      },
      {
        "id": 8,
        message: "dvdfvdfdfdfdf",
        "date_sent": new Date("2019-06-26 16:00"),
        "username": "Tony Stark"
      },
      {
        "id": 9,
        message: "dvdfvdfdfdfdf",
        "date_sent": new Date("2019-06-29 16:01"),
        "username": "Saltanat Alikhanova"
      }
    ]
  },
  { divider: true, inset: true },
  {
    id: 2,
    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    username: 'Bruce Wayne',
    status: "Gotham needs you"
  },
  { divider: true, inset: true },
  {
    id: 3,
    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    username: 'Carol Danvers',
    status: "On vacation"
  },
  { divider: true, inset: true },
  {
    id: 4,
    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    username: 'Diana Prince',
    status: "Women runs the world!"
  },
  { divider: true, inset: true },
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
  local.setItem(arrayName, JSON.stringify(data));
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
    localStorageArrayPush('contacts', contact);
  },

  findContact(filter){
    var _contact = null;
    var success = true;
    var _contacts = JSON.parse(localStorage.getItem('contacts'));
    var res = [];
    for(var i in _contacts){
      _contact = _contacts[i];
      for(var j in filter){
        if(_contact[j] && !_contact[j].startsWith(filter[j])){
          success = false;
        }
        if(success){
          res.push(_contact);
        }
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
    _contacts.splice(index, 0, contact);
    localStorage.setItem('contacts', JSON.stringify(_contacts));
  }
}
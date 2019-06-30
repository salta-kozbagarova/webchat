import Repository from './Repository';

const resource = '/auth-user';

var authUser = {
    id: 555,
    avatar: 'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    username: 'Saltanat Alikhanova',
    status: 'Got a job at BI Development <i aria-hidden="true" class="v-icon mdi mdi-thumb-up-outline theme--light"></i>'
  };

localStorage.setItem('authUser', JSON.stringify(authUser));

export default {

	get(){
		//return Repository.get(`${resource}`);
        return JSON.parse(localStorage.getItem('authUser'));
	}
}
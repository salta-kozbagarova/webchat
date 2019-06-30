import ContactsRepository from './contactsRepository'
import AuthUserRepository from './authUserRepository'

const repositories = {
	contacts: ContactsRepository,
	authUser: AuthUserRepository,
};

export const RepositoryFactory = {
	get: name => repositories[name]
};
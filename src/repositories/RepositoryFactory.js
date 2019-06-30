import ContactsRepository from './contactsRepository'

const repositories = {
	contacts: ContactsRepository,
};

export const RepositoryFactory = {
	get: name => repositories[name]
};
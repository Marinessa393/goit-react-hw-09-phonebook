import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

// fetchContacts
export const fetchContactRequest = createAction(
  'phonebook/fetchContactRequest',
);
export const fetchContactSuccess = createAction(
  'phonebook/fetchContactSuccess',
);
export const fetchContactError = createAction('phonebook/fetchContactError');

// addContact
export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');

// deleteContact
export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/ChangeFilter');

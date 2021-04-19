//import { v4 as uuid } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequrest = createAction(
  'contacts/fetchContactRequrest',
);
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequrest = createAction('contacts/addContactRequrest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

//export const deleteContact = createAction('contacts/delete');
export const deleteContactRequrest = createAction(
  'contacts/deleteContactRequrest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

/*const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    number,
    id: uuid(),
  },
}));*/

export const changeFilterName = createAction('contacts/filter');

/*
const contactActions = {
  fetchContactRequrest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequrest,
  addContactSuccess,
  addContactError,
  deleteContactRequrest,
  deleteContactSuccess,
  deleteContactError,
  changeFilterName,
};


export default contactActions;*/

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//import { contactActions } from './contact-actions';
import {
  addContactRequrest,
  addContactSuccess,
  addContactError,
  deleteContactRequrest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequrest,
  fetchContactSuccess,
  fetchContactError,
  changeFilterName,
} from './contact-actions';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilterName]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactRequrest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequrest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequrest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});
const error = createReducer('', {
  [fetchContactError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

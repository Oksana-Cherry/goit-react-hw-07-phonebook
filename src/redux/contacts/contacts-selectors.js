import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;
const getContacts = state => state.contacts.items;

const getLoding = state => state.contacts.loading;
const getError = state => state.contacts.error;

/*const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normolizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normolizedFilter),
  );
};*/
//МЕМОИЗАЦИЯ
/*const getNormolizedFilter = state => {
  const filter = getFilter(state);

  return filter.toLowerCase(state);
};
const getVisibleContacts = createSelector(
  [getContacts, getNormolizedFilter],
  (contacts, normolizedFilter) => {
    debugger;
    contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normolizedFilter),
    );
  },
);*/

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const getFiterContacts = contacts => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    };
    return getFiterContacts(contacts);
  },
);
const contactsSelectors = {
  getContacts,
  getFilter,
  getLoding,
  getError,
  getVisibleContacts,
};
export default contactsSelectors;

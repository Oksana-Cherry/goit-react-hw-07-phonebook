const getLoding = state => state.contacts.loading;
const getError = state => state.contacts.error;

const getFilter = state => state.contacts.filter;
const getContacts = state => state.contacts.contacts;

const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normolizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normolizedFilter),
  );
};

/*export default {
  getFilter,
  getLoding,
  getError,
  getVisibleContacts,
};*/
const contactsSelectors = {
  getFilter,
  getLoding,
  getError,
  getVisibleContacts,
};

export default contactsSelectors;

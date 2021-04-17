import axios from 'axios';
//import actions from './contact-actions';
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
} from './contact-actions';

axios.defaults.baseURL = 'http://localhost:4040';

/*const asyncActionCreator = args => dispatch => {
  // можно диспачить http запросы
};*/

/*const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/todos');

    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }*/

const fetchContact = () => dispatch => {
  dispatch(fetchContactRequrest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };
  //dispatch({ type: 'contacts/addContactRequrest' });
  dispatch(addContactRequrest());

  axios
    .post('/contacts', contact)
    .then(
      //dispatch({ type: 'contacts/addContactSuccess', paload: data }),
      ({ data }) => dispatch(addContactSuccess(data)),
    )
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequrest());

  axios
    /*.delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))*/
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccess(id));
    })
    .catch(error => dispatch(deleteContactError(error)));
};

const contactsOperations = {
  fetchContact,
  addContact,
  deleteContact,
};
export default contactsOperations;

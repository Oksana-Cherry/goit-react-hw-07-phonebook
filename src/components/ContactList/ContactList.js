import { connect } from 'react-redux';
import styles from './ContactList.module.css';
//import contactsOperations from '../../redux/contacts/contect-operations';
//import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.List_item} key={id}>
      <p>{name + ': ' + number}</p>
      <button className={styles.List_button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) return null;

  return (
    <ul className={styles.List}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

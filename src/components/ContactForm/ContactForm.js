import React, { Component } from 'react';
import styles from './ContactForm.module.css';

import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    const { name, number } = this.state;
    const { contacts, onSubmit } = this.props;

    event.preventDefault();

    const isExistContact = contacts.find(contact => contact.name === name);

    if (isExistContact !== undefined) {
      alert(`${name}is already in the Phonebook`);
      return;
    }

    onSubmit(name, number);
    if (!name || !number) {
      alert(`Some field is empty`);

      return false;
    }
    this.setState({ name: '', number: '' });
  };
  resetForm = () => this.setState(this.state);

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.Forms} onSubmit={this.handleSubmit}>
        <label className={styles.Form_label}>
          Name
          <input
            className={styles.Form_input}
            type="text"
            name="name"
            placeholder=""
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.Form_label}>
          Number
          <input
            className={styles.Form_input}
            type="tel"
            name="number"
            placeholder=""
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.Form_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

import React, { Component } from 'react';

import { connect } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList/';
import Filter from './components/Filter';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import contactsOperations from './redux/contacts/contect-operations';
import contactsSelectors from './redux/contacts/contacts-selectors';

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>

        <ContactForm />

        <h2>Contacts</h2>

        <Filter />

        <ContactList />
        {this.props.isLoading && (
          <Loader
            type="ThreeDots"
            color="#303f9f"
            height={80}
            width={80}
            className="Loader"
          />
        )}
        {this.props.error && <h1>No result found!</h1>}
      </>
    );
  }
}

const mapStateToProps = state => ({
  //isLoading: state.contacts.loading,
  isLoading: contactsSelectors.getLoding(state),
  error: contactsSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactsOperations.fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    number: '',
    filter: '',
  };

  handleContact = newContact =>
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));

  handleCheckUnique = name => {
    // проверка
    const { contacts } = this.state;
    console.log(contacts);
    const isExistContact = !!contacts.find(contact => contact.name === name);

    isExistContact && alert(`${name}is already in the Phonebook`);
    return !isExistContact;
  };

  handleDeleteContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  handleFilterChange = filter => this.setState({ filter });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
  const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.handleContact} onCheckUnique={this.handleCheckUnique}/>
        
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange}/>
        
        <ContactList  contacts={visibleContacts} onDelete={this.handleDeleteContact} />
       
      </>
    );
  }
}
export default App;*/

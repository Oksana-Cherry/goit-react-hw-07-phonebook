import React, { Component } from 'react';

import { connect } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList/';
import Filter from './components/Filter';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { contactsSelectors, contactsOperations } from './redux/contacts';

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
  isLoading: contactsSelectors.getLoding(state),
  error: contactsSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactsOperations.fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

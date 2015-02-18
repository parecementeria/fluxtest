var Header = require('./header.react');
var ContactContainer = require('./contactContainer.react');
var ContactForm = require('./contactForm.react');
var React = require('react');
var ContactStore = require('../stores/contactStore');

function getState() {
  return {
    allContacts : ContactStore.getAll(),
    activeContact : ContactStore.getActive()
  }
}

var ContactApp = React.createClass({

  getInitialState: function() {
    return getState();
  },

  componentDidMount: function() {
    ContactStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ContactStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <Header />
        <ContactForm />
        <ContactContainer allContacts={this.state.allContacts} activeContact={this.state.activeContact} />
      </div>
    );
  },

  _onChange: function() {
    this.setState(getState());
  }

});

module.exports = ContactApp;
var Header = require('./header.react');
var ContactContainer = require('./contactContainer.react');
var ContactForm = require('./contactForm.react');
var React = require('react');

var ContactApp = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <ContactForm />
        <ContactContainer />
      </div>
    );
  },

});

module.exports = ContactApp;
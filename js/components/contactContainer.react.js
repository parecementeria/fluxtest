var React = require('react');
var ReactPropTypes = React.PropTypes;

var ContactContainer = React.createClass({

  propTypes: {
    allContacts: ReactPropTypes.object.isRequired,
  },

  render: function() {
    if (Object.keys(this.props.allContacts).length < 1) {
      return null;
    }
    var allContacts = this.props.allContacts;
    var contacts = [];

    for (var key in allContacts) {
      contacts.push(allContacts[key]);
    }
    return (
      <div className="container">
        <div className="contact-list col-md-3 list-group">
          {contacts.map(function (contact, index) {
            return <li className="list-group-item" key={index}>{contact.name}</li>
          })}
        </div>
      </div>
    );
  }

});

module.exports = ContactContainer;
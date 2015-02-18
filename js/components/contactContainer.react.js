var React = require('react');
var ContactActions = require('../actions/contactActions');
var ContactInfo = require('../components/contactInfo.react');
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
    var active = this.props.activeContact;

    for (var key in allContacts) {
      contacts.push(allContacts[key]);
    }
    var self = this;
    return (
      <div className="container contact-container">
        <div className="col-md-3 list-group">
          {contacts.map(function (contact, index) {
            var classattr = 'list-group-item';
            if (active == contact.id) {
              classattr='list-group-item active';
            }
            return <a className={classattr} key={index} onClick={self._onClick.bind(null, contact.id)}>{contact.name}</a>
          })}
        </div>
        <ContactInfo contact={allContacts[active]}/>
      </div>
    );
  },

  _onClick: function(id) {
    ContactActions.activate(id);
  }

});

module.exports = ContactContainer;
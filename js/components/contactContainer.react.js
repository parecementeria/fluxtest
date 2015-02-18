var React = require('react');
var ContactActions = require('../actions/contactActions');
var ContactInfo = require('../components/contactInfo.react');
var ReactPropTypes = React.PropTypes;

var ContactContainer = React.createClass({

  render: function() {
    if (this.props.allContacts.length < 1) {
      return null;
    }
    var allContacts = this.props.allContacts;
    var active = this.props.activeContact;

    var self = this;
    return (
      <div className="container contact-container">
        <div className="col-md-3 list-group">
          {allContacts.map(function (contact, index) {
            var classattr = 'list-group-item';
            if (active == index) {
              classattr='list-group-item active';
            }
            return <a className={classattr} key={index} onClick={self._onClick.bind(null, index)}>{contact.name}</a>
          })}
        </div>
        <ContactInfo contact={allContacts[active]} index={active} />
      </div>
    );
  },

  _onClick: function(index) {
    ContactActions.activate(index);
  }

});

module.exports = ContactContainer;
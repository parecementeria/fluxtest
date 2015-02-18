var React = require('react');
var ContactActions = require('../actions/contactActions');

var ContactInfo = React.createClass({

  render: function() {
    if(!this.props.contact){
      return null;
    }

    return (
      <div className="col-md-9 jumbotron">
        <h2>{this.props.contact.name}</h2>
        <p>{this.props.contact.info}</p>
        <button 
          type="button" 
          className="btn btn-danger" 
          onClick={this._onClick.bind(null, this.props.contact.id)} >
            Delete contact
        </button>
      </div>
    );
  },

  _onClick: function(id) {
    ContactActions.destroy(id);
  }

});

module.exports = ContactInfo;
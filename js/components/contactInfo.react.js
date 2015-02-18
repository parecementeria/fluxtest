var React = require('react');
var ContactActions = require('../actions/contactActions');

var ContactInfo = React.createClass({

  render: function() {
    if(!this.props.contact){
      return null;
    }

    return (
      <div className="col-md-9 jumbotron">
        <div className="btn-group pull-right">
          <button 
            type="button" 
            className="btn btn-danger" 
            aria-label="Left Align"
            onClick={this._onClick.bind(null, this.props.index)} >
              <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </button>
          <button 
            type="button" 
            className="btn btn-info" 
            aria-label="Center Align">
              <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
          </button>
        </div>
        <h2>{this.props.contact.name}</h2>
        <p>{this.props.contact.info}</p>
      </div>
    );
  },

  _onClick: function(index) {
    ContactActions.destroy(index);
  }

});

module.exports = ContactInfo;
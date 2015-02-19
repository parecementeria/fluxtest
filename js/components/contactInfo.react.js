var React = require('react');
var ContactActions = require('../actions/contactActions');

var ContactInfo = React.createClass({

  getInitialState: function() {
    return {
      editOn: false
    };
  },

  render: function() {
    if(!this.props.contact){
      return null;
    }
    if(this.state.editOn) {
      return (
        <div className="col-md-9 jumbotron">
        <div className="btn-group pull-right">
          <button 
            type="button" 
            className="btn btn-success" 
            aria-label="Center Align"
            onClick={this._onChange} >
              <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
          </button>
          <button 
            type="button" 
            className="btn btn-danger" 
            aria-label="Left Align"
            onClick={this._onEdit} >
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </div>
        <input type="text" ref="editName" className="form-control" id="editName" defaultValue={this.props.contact.name} />
        <textarea type="text" ref="editInfo" rows="3" className="form-control" id="editInfo" defaultValue={this.props.contact.info} />
      </div>
      );
    }
    return (
      <div className="col-md-9 jumbotron">
        <div className="btn-group pull-right">
          <button 
            type="button" 
            className="btn btn-info" 
            aria-label="Center Align"
            onClick={this._onEdit} >
              <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
          </button>
          <button 
            type="button" 
            className="btn btn-danger" 
            aria-label="Left Align"
            onClick={this._onRemove.bind(null, this.props.index)} >
              <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </button>
        </div>
        <h2>{this.props.contact.name}</h2>
        <p>{this.props.contact.info}</p>
      </div>
    );
  },

  _onEdit: function() {
    var value = this.state.editOn ? false : true;
    this.setState({editOn: value});
  },

  _onChange: function() {
    var index = this.props.index;
    var name = this.refs.editName.getDOMNode().value;
    var info = this.refs.editInfo.getDOMNode().value;
    ContactActions.update(index, name, info);
    this.setState({editOn: false});
  },

  _onRemove: function(index) {
    ContactActions.destroy(index);
  }

});

module.exports = ContactInfo;
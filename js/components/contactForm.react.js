var React = require('react');
var ContactActions = require('../actions/contactActions');

var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

var ContactForm = React.createClass({

  getInitialState: function() {
    return {
      name: '',
      info: ''
    };
  },

  render: function() {
    return (
      <div className="container">
        <div className="form-group">
          <label>Contact name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={this._onChangeName} />
        </div>
        <div className="form-group">
          <label>Info</label>
          <input type="text" className="form-control" id="info" placeholder="enter Info" onChange={this._onChangeInfo}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this._onSave}>add contact</button>
      </div>
    );
  },

  _onChangeName: function(){
    this.setState({
      name: event.target.value
    });
  },
  
  _onChangeInfo: function(){
    this.setState({
      info: event.target.value
    });
  },

  _onSave: function(name, info) {
    var name = this.state.name.trim();
    var info = this.state.info.trim();
    if (name && info ){
      ContactActions.create(name, info);
    }
  }

});

module.exports = ContactForm;
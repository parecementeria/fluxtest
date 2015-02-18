var React = require('react');
var ContactActions = require('../actions/contactActions');

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
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-md-2 control-label">Contact name</label>
            <div className="col-md-10">
              <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={this._onChangeName} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Info</label>
            <div className="col-md-10">
              <input type="text" className="form-control" id="info" placeholder="enter Info" onChange={this._onChangeInfo}/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary pull-right" onClick={this._onSave}>add contact</button>
        </form>
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

  _onSave: function() {
    var name = this.state.name.trim();
    var info = this.state.info.trim();
    if (name && info ){
      ContactActions.create(name, info);
    }
  }

});

module.exports = ContactForm;
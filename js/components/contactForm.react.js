var React = require('react');
var ContactActions = require('../actions/contactActions');

var ContactForm = React.createClass({

  render: function() {
    return (
      <div className="container">
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-md-2 control-label">Contact name</label>
            <div className="col-md-10">
              <input type="text" ref="createName" className="form-control" id="name" placeholder="Enter name"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">Info</label>
            <div className="col-md-10">
              <textarea type="text" ref="createInfo" rows="3" className="form-control" id="info" placeholder="enter Info"/>
            </div>
          </div>
          <a className="btn btn-primary pull-right" onClick={this._onSave}>add contact</a>
        </form>
      </div>
    );
  },

  _onSave: function() {
    var name = this.refs.createName.getDOMNode().value.trim();
    var info = this.refs.createInfo.getDOMNode().value.trim();
    if (name && info ){
      ContactActions.create(name, info);
    }
  }

});

module.exports = ContactForm;
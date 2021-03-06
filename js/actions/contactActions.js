
var AppDispatcher = require('../dispatcher/dispatcher');
var ContactConstants = require('../constants/contactConstants');

var ContactActions = {

  create: function(name, info) {
    AppDispatcher.dispatch({
      actionType: ContactConstants.CONTACT_CREATE,
      name: name,
      info: info
    });
  },

  update: function(index, name, info) {
    AppDispatcher.dispatch({
      actionType: ContactConstants.CONTACT_UPDATE,
      index: index,
      name: name,
      info: info
    });
  },

  activate: function(index) {
    AppDispatcher.dispatch({
      actionType: ContactConstants.CONTACT_ACTIVATE,
      index: index
    });
  },

  destroy: function(index) {
    AppDispatcher.dispatch({
      actionType: ContactConstants.CONTACT_DESTROY,
      index: index
    });
  },

};

module.exports = ContactActions;
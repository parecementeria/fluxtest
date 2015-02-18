
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

  update: function(id, updates) {
    AppDispatcher.dispatch({
      actionType: ContactConstants.CONTACT_UPDATE,
      updates: updates
    });
  },

  activate: function(id) {
    AppDispatcher.dispatch({
      actionType: ContactConstants.CONTACT_ACTIVATE,
      id: id
    });
  },

  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: ContactConstants.CONTACT_DESTROY,
      id: id
    });
  },

};

module.exports = ContactActions;